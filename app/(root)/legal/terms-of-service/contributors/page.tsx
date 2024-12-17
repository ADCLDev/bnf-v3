// app/(root)/legal/terms-of-service/contributors/page.tsx
import { ScrollText } from "lucide-react";
import PolicySection from "@/components/legal/PolicySection";
import PolicyHeader from "@/components/legal/PolicyHeader";

const ContributorTermsPage = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <PolicyHeader
        title="Contributor Terms & Conditions"
        description="Guidelines and policies for font contributors. Please review these terms carefully before submitting fonts to our platform."
        icon={ScrollText}
      />
      
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm">
        <PolicySection title="Eligibility & Registration">
          <p>
            To become a contributor, you must complete your profile, verify your identity, and agree to these terms. You must be legally able to grant the necessary rights to distribute your submitted fonts.
          </p>
        </PolicySection>

        <PolicySection title="Font Submission Requirements">
          <p>
            All submitted fonts must be original works or works you have the rights to distribute. Each submission must include complete character sets, proper metadata, and documentation of any third-party components used in creation.
          </p>
        </PolicySection>

        <PolicySection title="Quality Standards">
          <p>
            Submitted fonts must meet our technical specifications and quality standards. This includes proper kerning, spacing, and format compatibility. We reserve the right to reject submissions that don&apos;t meet these standards.
          </p>
        </PolicySection>

        <PolicySection title="Licensing & Rights">
          <p>
            You retain ownership of your fonts while granting us the right to distribute them through our platform. You must clearly specify personal and commercial licensing terms for each submission.
          </p>
        </PolicySection>

        <PolicySection title="Revenue & Payments">
          <p>
            Revenue sharing is based on our current profit percentage rates. Payments are processed according to our payment schedule once minimum withdrawal thresholds are met. Contributors are responsible for applicable taxes.
          </p>
        </PolicySection>

        <PolicySection title="Font Updates & Maintenance">
          <p>
            Contributors are expected to maintain their fonts, address technical issues, and provide updates when necessary. Major updates should be clearly versioned and documented.
          </p>
        </PolicySection>

        <PolicySection title="Platform Guidelines">
          <p>
            Contributors must follow our community guidelines, respond to support inquiries promptly, and maintain professional conduct. Violation of these guidelines may result in removal from the platform.
          </p>
        </PolicySection>

        <PolicySection title="Term & Termination">
          <p>
            We reserve the right to terminate contributor accounts for violations of these terms. Upon termination, existing user licenses will be honored, but the font will be removed from future sale.
          </p>
        </PolicySection>

        <PolicySection title="Support & Communication">
          <p>
            Contributors must maintain current contact information and respond to support requests within established timeframes. Technical support for your fonts must be provided according to our support guidelines.
          </p>
        </PolicySection>

        <PolicySection title="Changes to Terms">
          <p>
            We may update these terms with notice to contributors. Continued use of the platform after changes constitutes acceptance of modified terms. Major changes will require explicit agreement to continue participation.
          </p>
        </PolicySection>
      </div>
    </div>
  </div>
);

export default ContributorTermsPage;