// Populate only with genuine reviews supplied or verified by the business owner.
// Do not invent quotes, identities, star ratings or review counts.
export interface ClientReview {
  quote: string;
  author: string;
  attribution?: string;
  stars?: 1 | 2 | 3 | 4 | 5;
  sourceUrl?: string;
}
export const clientReviews: ClientReview[] = [];
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
