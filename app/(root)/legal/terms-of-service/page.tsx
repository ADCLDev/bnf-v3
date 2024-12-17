// app/(root)/legal/terms-of-service/page.tsx
import PolicySection from "@/components/legal/PolicySection";
import PolicyHeader from "@/components/legal/PolicyHeader";
import { ScrollText } from "lucide-react";

const TermsOfServicePage = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <PolicyHeader
        title="Terms of Service"
        description="Please read these terms carefully before using our platform and services."
        icon={ScrollText}
      />
      
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm">
        <PolicySection title="Account Terms">
          <p>
            You must provide accurate and complete information when creating an account. You are responsible for maintaining the security of your account credentials.
          </p>
        </PolicySection>

        <PolicySection title="User Conduct">
          <p>
            You agree to use our platform in compliance with all applicable laws and regulations. Any misuse of our services may result in immediate termination of your account.
          </p>
        </PolicySection>

        <PolicySection title="Content Rights">
          <p>
            All fonts and related materials on our platform are protected by copyright and other intellectual property laws. You may only use them in accordance with their respective licenses.
          </p>
        </PolicySection>

        <PolicySection title="Modifications">
          <p>
            We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
          </p>
        </PolicySection>
      </div>
    </div>
  </div>
);

export default TermsOfServicePage;