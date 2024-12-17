// app/(root)/legal/privacy-policy/page.tsx
import PolicySection from "@/components/legal/PolicySection";
import PolicyHeader from "@/components/legal/PolicyHeader";
import { Shield } from "lucide-react";

const PrivacyPolicyPage = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <PolicyHeader
        title="Privacy Policy"
        description="We are committed to protecting your privacy and ensuring the security of your personal information."
        icon={Shield}
      />
      
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm">
        <PolicySection title="Information We Collect">
          <p>
            We collect information that you provide directly to us, including your name, email address, and payment information when you make a purchase. We also automatically collect certain information about your device when you use our services.
          </p>
        </PolicySection>

        <PolicySection title="How We Use Your Information">
          <p>
            We use the information we collect to provide and improve our services, process your transactions, communicate with you, and comply with our legal obligations.
          </p>
        </PolicySection>

        <PolicySection title="Information Sharing">
          <p>
            We do not sell or rent your personal information to third parties. We may share your information with service providers who assist us in operating our platform and processing transactions.
          </p>
        </PolicySection>

        <PolicySection title="Data Security">
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, or destruction.
          </p>
        </PolicySection>
      </div>
    </div>
  </div>
);

export default PrivacyPolicyPage;