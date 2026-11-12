import type { LucideIcon } from "lucide-react";
import { Boxes, Store, ShoppingBag, Sparkles, LayoutTemplate, Building2, Landmark } from "lucide-react";

export type Service = {
  id: string;
  title: string;
  short: string;
  icon: LucideIcon;
  division: "ecommerce" | "consultancy";
  intro: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    id: "amazon-fba",
    title: "Amazon FBA Wholesale",
    short: "A wholesale model built on sourcing, brand research and FBA support.",
    icon: Boxes,
    division: "ecommerce",
    intro:
      "Build an Amazon FBA wholesale business on a structured foundation, from finding suppliers to supporting day-to-day FBA operations.",
    points: ["Wholesale business model", "Product sourcing", "Brand and supplier research", "FBA business support"],
  },
  {
    id: "walmart",
    title: "Walmart 2-Step Dropshipping",
    short: "Walmart marketplace operations using the 2-step dropshipping model.",
    icon: Store,
    division: "ecommerce",
    intro:
      "Operate on the Walmart marketplace with a 2-step dropshipping approach, with support across the running of your store.",
    points: ["Walmart marketplace operations", "2-Step dropshipping business model", "Store operations and management"],
  },
  {
    id: "ebay",
    title: "eBay Dropshipping",
    short: "Store setup, product research and listing management for eBay.",
    icon: ShoppingBag,
    division: "ecommerce",
    intro: "Launch and run an eBay dropshipping store, from the first listing to ongoing operations.",
    points: ["eBay store setup", "Product research", "Listing management", "Dropshipping operations"],
  },
  {
    id: "etsy",
    title: "Etsy Digital Products",
    short: "Research, create and sell digital products through an optimized Etsy shop.",
    icon: Sparkles,
    division: "ecommerce",
    intro: "Turn digital products into a shop-ready business, covering research, creation and store optimization.",
    points: ["Digital product research", "Digital product creation", "Etsy shop setup", "Store optimization"],
  },
  {
    id: "shopify",
    title: "Shopify Store Designing",
    short: "Professional, responsive Shopify storefronts designed around your brand.",
    icon: LayoutTemplate,
    division: "ecommerce",
    intro: "A professionally designed Shopify storefront that presents your brand clearly on every screen size.",
    points: [
      "Professional Shopify storefront design",
      "Homepage and landing page design",
      "Product page development",
      "Store customization",
      "Responsive design",
    ],
  },
  {
    id: "us-llc",
    title: "US LLC Formation",
    short: "Registration assistance and setup guidance for a United States LLC.",
    icon: Building2,
    division: "consultancy",
    intro: "Guidance for entrepreneurs who want to set up a limited liability company in the United States.",
    points: ["United States LLC registration assistance", "Business setup consultancy", "Formation process guidance"],
  },
  {
    id: "uk-ltd",
    title: "UK LTD Formation",
    short: "Company formation assistance and registration guidance for the United Kingdom.",
    icon: Landmark,
    division: "consultancy",
    intro: "Support for forming a private limited company in the United Kingdom, from registration to setup.",
    points: ["United Kingdom LTD company formation assistance", "Business registration guidance", "Company setup consultancy"],
  },
];

export const ECOM = SERVICES.filter((s) => s.division === "ecommerce");
export const CONSULT = SERVICES.filter((s) => s.division === "consultancy");
