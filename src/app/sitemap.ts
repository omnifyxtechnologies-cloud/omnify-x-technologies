import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "about/", "ecommerce/", "consultancy/", "ventures/", "contact/", "privacy-policy/", "terms-and-conditions/"].map((p) => ({ url: `${SITE.url}/${p}` }));
}
