import test from "node:test";
import assert from "node:assert/strict";
import { createEmailDraft, submitEnquiry } from "../src/lib/enquiry.ts";
const data = {
  name: "A & B",
  email: "owner@example.com",
  business: "Test Ltd",
  type: "Limited company",
  service: "VAT returns",
  message: "A question?\nSecond line.",
};
test("email draft preserves all fields and safely encodes input", () => {
  const url = new URL(createEmailDraft("mohsikhan@yahoo.com", data));
  assert.equal(url.protocol, "mailto:");
  assert.equal(url.pathname, "mohsikhan@yahoo.com");
  assert.equal(
    url.searchParams.get("subject"),
    "Business enquiry: VAT returns",
  );
  for (const value of Object.values(data))
    assert.ok(url.searchParams.get("body").includes(value));
});
test("submission requires HTTPS and confirms actual JSON acceptance", async () => {
  const original = globalThis.fetch;
  try {
    await assert.rejects(submitEnquiry("http://example.com", data));
    for (const response of [
      new Response("unavailable", { status: 503 }),
      new Response("<html>ok</html>"),
      Response.json({ ok: false }),
      Response.json({}),
    ]) {
      globalThis.fetch = async () => response;
      await assert.rejects(submitEnquiry("https://example.com", data));
    }
    globalThis.fetch = async (url, options) => {
      assert.equal(url, "https://example.com");
      assert.equal(options.method, "POST");
      assert.deepEqual(JSON.parse(options.body), data);
      return Response.json({ ok: true });
    };
    await assert.doesNotReject(submitEnquiry("https://example.com", data));
  } finally {
    globalThis.fetch = original;
  }
});
