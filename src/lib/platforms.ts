import { Boxes, Store, ShoppingBag, Sparkles, LayoutTemplate } from "lucide-react";

/**
 * Marketplace / platform logos.
 * Put each official logo file in /public/logos/ using the file names below (SVG or PNG, transparent background,
 * roughly 400 x 120 px, wide/horizontal version). Until a file exists, the icon + name is shown instead.
 */
export const PLATFORMS = [
  { id: "amazon-fba", name: "Amazon", icon: Boxes, logo: "/logos/amazon.svg" },
  { id: "walmart", name: "Walmart", icon: Store, logo: "/logos/walmart.svg" },
  { id: "ebay", name: "eBay", icon: ShoppingBag, logo: "/logos/ebay.svg" },
  { id: "etsy", name: "Etsy", icon: Sparkles, logo: "/logos/etsy.svg" },
  { id: "shopify", name: "Shopify", icon: LayoutTemplate, logo: "/logos/shopify.svg" },
] as const;
