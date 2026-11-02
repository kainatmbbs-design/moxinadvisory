// Populate only with genuine reviews supplied or verified by the business owner.
// Do not invent quotes, identities, star ratings or review counts.
export interface ClientReview {
  quote: string;
  author: string;
  attribution?: string;
  stars?: 1 | 2 | 3 | 4 | 5;
  sourceUrl?: string;
}
// Testimonials and ratings supplied directly by the business owner on 2 November 2026.
// These are client testimonials, not independently verified Google reviews.
export const clientReviews: ClientReview[] = [
  {
    author: 'Sarah Mitchell',
    attribution: 'Small Business Owner',
    stars: 5,
    quote: 'Moxin Advisory has been fantastic for my business. They’re professional, friendly and always quick to respond. Managing my accounts has never been this straightforward. I would highly recommend their services.',
  },
  {
    author: 'James Thompson',
    attribution: 'Sole Trader',
    stars: 5,
    quote: 'I’ve had a brilliant experience with Moxin Advisory. They took care of my bookkeeping and tax returns efficiently and explained everything clearly. Excellent service and great value for money.',
  },
  {
    author: 'Olivia Bennett',
    attribution: 'Company Director',
    stars: 5,
    quote: 'A reliable and knowledgeable accountancy firm. Moxin Advisory has helped us keep our finances organised and stay on top of our VAT and reporting requirements. Highly recommended for any growing business.',
  },
  {
    author: 'Daniel Foster',
    attribution: 'Self-Employed Consultant',
    stars: 5,
    quote: 'Excellent communication and a very professional approach. The team at Moxin Advisory made the whole accounting process simple and stress-free. I’m very pleased with the service.',
  },
  {
    author: 'Emily Carter',
    attribution: 'Startup Founder',
    stars: 5,
    quote: 'As a new business owner, I needed an accountant who could guide me through everything. Moxin Advisory has been incredibly helpful and supportive. Their advice has made running my business much easier.',
  },
];
export const googleReviews: {
  profileUrl: string;
  rating: number | null;
  reviewCount: number | null;
  checkedOn: string;
} = {
  profileUrl: '',
  rating: null,
  reviewCount: null,
  checkedOn: '',
};
