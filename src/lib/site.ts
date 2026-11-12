export const SITE = {
  name: "Omnify X Technologies",
  short: "Omnify X",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://omnifyxtechnologies.online",
  email: "hello@omnifyxtechnologies.online",
  phoneDisplay: "+92 315 3903507",
  phoneHref: "tel:+923153903507",
  whatsapp: "https://wa.me/923153903507",
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "",
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  {
    label: "E-commerce",
    href: "/ecommerce/",
    children: [
      { label: "Amazon FBA Wholesale", href: "/ecommerce/#amazon-fba" },
      { label: "Walmart 2-Step Dropshipping", href: "/ecommerce/#walmart" },
      { label: "eBay Dropshipping", href: "/ecommerce/#ebay" },
      { label: "Etsy Digital Products", href: "/ecommerce/#etsy" },
      { label: "Shopify Store Designing", href: "/ecommerce/#shopify" },
    ],
  },
  {
    label: "Software",
    href: "/software/",
    children: [
      { label: "SaaS Management Portals", href: "/software/#portals" },
      { label: "Web Development", href: "/software/#web-development" },
    ],
  },
  {
    label: "Consultancy",
    href: "/consultancy/",
    children: [
      { label: "US LLC Formation", href: "/consultancy/#us-llc" },
      { label: "UK LTD Formation", href: "/consultancy/#uk-ltd" },
    ],
  },
  {
    label: "Ventures",
    href: "/ventures/",
    children: [
      { label: "Temp Number Marketplace", href: "/ventures/#temp-number" },
      { label: "Cafe & Workspace", href: "/ventures/#cafe-workspace" },
    ],
  },
  { label: "Contact", href: "/contact/" },
] as const;
