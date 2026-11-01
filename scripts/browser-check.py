from playwright.sync_api import sync_playwright
import json,os,shutil
from pathlib import Path
out=str(Path(__file__).resolve().parents[1]/'docs'/'screenshots')
os.makedirs(out,exist_ok=True)
origin=os.environ.get('SITE_TEST_URL','http://localhost:4321').rstrip('/')
with sync_playwright() as p:
 browser=p.chromium.launch(executable_path=os.environ.get('CHROMIUM_PATH') or shutil.which('chromium'),headless=True,args=['--no-sandbox'])
 page=browser.new_page()
 errors=[]
 page.on('pageerror',lambda error:errors.append(str(error)))
 paths=['/','/services/','/who-we-help/','/about/','/contact/','/privacy/','/my-money-privacy/','/services/bookkeeping/','/services/vat/','/services/payroll/','/services/annual-accounts-corporation-tax/','/services/self-assessment/','/services/management-accounts-cash-flow/']
 for width in [375,768,1440]:
  page.set_viewport_size({'width':width,'height':950})
  for path in paths:
   response=page.goto(origin+path)
   assert response.status==200,(path,response.status)
   assert page.locator('h1').count()==1,path
   assert page.evaluate('document.documentElement.scrollWidth <= window.innerWidth'),(width,path,'overflow')
  page.goto(origin+'/')
  page.screenshot(path=f'{out}/home-{width}.png',full_page=True)
  if width==375:
   toggle=page.get_by_role('button',name='Menu')
   assert toggle.get_attribute('aria-expanded')=='false'
   toggle.click(); assert toggle.get_attribute('aria-expanded')=='true'
   page.keyboard.press('Escape');assert toggle.get_attribute('aria-expanded')=='false'
   toggle.click();page.get_by_role('navigation').get_by_role('link',name='Services',exact=True).click()
   assert page.url.endswith('/services/')
  page.goto(origin+'/#faqs')
  summary=page.locator('summary').first
  summary.focus();page.keyboard.press('Enter');assert page.locator('details').first.get_attribute('open') is not None
 page.goto(origin+'/contact/?service=VAT%20returns')
 assert page.locator('#service').input_value()=='VAT returns'
 page.locator('#name').fill('Test owner');page.locator('#email').fill('owner@example.com')
 page.locator('#type').select_option(label='Limited company');page.locator('#message').fill('Please discuss bookkeeping.')
 page.get_by_role('button',name='Open email draft').click()
 assert 'Email draft requested' in page.locator('#form-status').inner_text()
 assert page.locator('#message').input_value()=='Please discuss bookkeeping.'
 assert page.locator('a[href="mailto:mohsikhan@yahoo.com"]').count()>=1
 page.screenshot(path=f'{out}/contact-1440.png',full_page=True)
 # Configured adapter: mock rejection, malformed success, then confirmed acceptance.
 page.evaluate("document.querySelector('#enquiry').dataset.endpoint='https://forms.example.test/enquiry'")
 for payload,code,expected in [('error',503,'could not be confirmed'),('{"ok":false}',200,'could not be confirmed'),('{"ok":true}',200,'accepted by the form service')]:
  page.route('https://forms.example.test/enquiry',lambda route,request,body=payload,status=code:route.fulfill(status=status,content_type='application/json',body=body,headers={'Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'POST, OPTIONS','Access-Control-Allow-Headers':'Content-Type'}))
  page.get_by_role('button',name='Open email draft').click()
  page.wait_for_function("document.querySelector('#form-status').textContent.includes('"+expected+"')")
  assert page.locator('#message').input_value()=='Please discuss bookkeeping.'
  page.unroute('https://forms.example.test/enquiry')
 # Check every local anchor target on all pages, including fragment IDs.
 for path in paths:
  page.goto(origin+path)
  links=page.locator('a[href]').evaluate_all('(links)=>links.map(a=>({url:a.href,href:a.getAttribute("href")}))')
  for link in links:
   if link['url'].startswith(origin):
    from urllib.parse import urlparse
    parsed=urlparse(link['url'])
    res=page.request.get(link['url'].split('#')[0]);assert res.status==200,link
    if parsed.fragment:
     assert f'id="{parsed.fragment}"' in res.text(),link
 assert not errors,errors
 # No-JS navigation remains available and fallback email is explained.
 nojs=browser.new_context(java_script_enabled=False,viewport={'width':375,'height':900})
 tab=nojs.new_page();tab.goto(origin+'/contact/')
 assert tab.get_by_role('navigation').is_visible()
 assert 'email' in tab.locator('noscript').inner_text()
 print(json.dumps({'pages':len(paths),'widths':[375,768,1440],'overflow':'none','navigation':'passed','FAQ_keyboard':'passed','email_draft':'passed','local_links':'passed','no_js':'passed','page_errors':errors}))
 browser.close()
