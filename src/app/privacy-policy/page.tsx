import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy", description: "How Omnify X Technologies handles information collected through this website." };

export default function Page() {
  return (
    <LegalPage title="Privacy Policy" updated="November 2026">
      <p>This policy explains how Omnify X Technologies (&ldquo;Omnify X&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) handles information when you use this website.</p>
      <h2>Information you give us</h2>
      <p>If you contact us through the contact form, email, phone or WhatsApp, we receive the details you choose to share, such as your name, email address, phone number and the content of your message. We use this only to respond to your enquiry and to provide the services you ask about.</p>
      <h2>Website usage</h2>
      <p>This website does not use advertising cookies or third-party tracking scripts. Our hosting provider may process standard technical data (such as IP address and browser type) in server logs to deliver the site and keep it secure.</p>
      <h2>Sharing of information</h2>
      <p>We do not sell your personal information. We may share it with service providers that help us operate the website or respond to you (for example, email or messaging providers), and where required by law.</p>
      <h2>Third-party links</h2>
      <p>This site links to third-party services such as WhatsApp. Their handling of your information is governed by their own privacy policies.</p>
      <h2>Retention and your rights</h2>
      <p>We keep enquiry information only as long as needed to handle your request and meet any legal obligations. You may ask us to access, correct or delete the personal information we hold about you by contacting us.</p>
      <h2>Contact</h2>
      <p>Questions about this policy: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
      <p>We may update this policy from time to time; the date above shows when it was last revised.</p>
    </LegalPage>
  );
}
