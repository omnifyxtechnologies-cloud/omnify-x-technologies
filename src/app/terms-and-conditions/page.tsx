import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Terms & Conditions", description: "Terms governing use of the Omnify X Technologies website." };

export default function Page() {
  return (
    <LegalPage title="Terms & Conditions" updated="November 2026">
      <p>By using this website you agree to these terms. If you do not agree, please do not use the site.</p>
      <h2>About this website</h2>
      <p>This website provides general information about Omnify X Technologies and its services and upcoming ventures. Content is provided for information only and may change without notice.</p>
      <h2>Services</h2>
      <p>Descriptions of services on this site are not an offer or contract. Terms for any service are agreed with you directly before work begins. Business setup and company formation consultancy is assistance and guidance only; it is not legal, tax or financial advice, and we do not guarantee any particular legal, tax, financial or commercial outcome.</p>
      <h2>Upcoming ventures</h2>
      <p>The Omnify X Temp Number Marketplace and Omnify X Cafe &amp; Workspace are in development. Mentions of them do not constitute a commitment to specific features, pricing, locations or launch dates.</p>
      <h2>Intellectual property</h2>
      <p>The Omnify X name, logo, text and design of this site belong to Omnify X Technologies. You may not copy or reuse them without our written permission.</p>
      <h2>Third-party platforms</h2>
      <p>Amazon, Walmart, eBay, Etsy, Shopify and other platforms mentioned are trademarks of their respective owners. Omnify X is not affiliated with or endorsed by them.</p>
      <h2>Limitation of liability</h2>
      <p>To the fullest extent permitted by law, Omnify X is not liable for losses arising from your use of, or reliance on, information on this website.</p>
      <h2>Contact</h2>
      <p>Questions about these terms: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
    </LegalPage>
  );
}
