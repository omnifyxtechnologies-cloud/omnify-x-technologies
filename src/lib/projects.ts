/**
 * Shopify stores we have designed. The showcase appears automatically once you add entries.
 * Screenshot: put it in /public/images/projects/ (1200 x 750 px, 16:10, JPG/WebP) and add `image: "/images/projects/<file>"`.
 * Until a screenshot is added, the card shows a clean browser-window placeholder with the store name.
 */
export type Project = { name: string; niche: string; url: string; image?: string };

export const SHOPIFY_PROJECTS: Project[] = [
  { name: "KNK Tech", niche: "Technology", url: "https://knktech.pk" },
  { name: "Amazing Toys", niche: "Toys", url: "https://amazingtoys.site" },
  { name: "Sky Solar Shop", niche: "Solar & Energy", url: "https://skysolarshop.com" },
  { name: "All In One Mart", niche: "General Store", url: "https://allinonemart.store" },
  { name: "Eros Scents", niche: "Fragrances", url: "https://erosscents.com" },
];
