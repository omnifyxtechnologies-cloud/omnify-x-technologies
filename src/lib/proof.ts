/**
 * REAL track record goes here. The "Proof" section on the home page appears automatically
 * as soon as you add entries, and stays hidden while these lists are empty.
 * Only add genuine results, client names and testimonials (with permission).
 */
export type Result = { value: string; label: string };
export type Testimonial = { quote: string; name: string; role?: string };
export type Work = { title: string; description: string; image?: string };

export const RESULTS: Result[] = [
  // { value: "25+", label: "Stores launched" },
];
export const TESTIMONIALS: Testimonial[] = [
  // { quote: "…", name: "Client name", role: "Amazon seller" },
];
export const WORK: Work[] = [
  // { title: "Shopify store for …", description: "…", image: "/images/work-1.jpg" },
];
