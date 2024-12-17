// app/(root)/legal/license-agreement/page.tsx
import PolicySection from "@/components/legal/PolicySection";
import PolicyHeader from "@/components/legal/PolicyHeader";
import { FileCheck } from "lucide-react";

const LicenseAgreementPage = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <PolicyHeader
        title="License Agreement"
        description="Understanding your rights and obligations when using our fonts."
        icon={FileCheck}
      />
      
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm">
        <PolicySection title="License Grant">
          <p>
            Upon purchase, you are granted a non-exclusive, non-transferable license to use the font software in accordance with the terms of your chosen license type.
          </p>
        </PolicySection>

        <PolicySection title="Usage Rights">
          <p>
            Your license determines where and how you can use the fonts, including the number of installations, websites, and end products allowed.
          </p>
        </PolicySection>

        <PolicySection title="Restrictions">
          <p>
            You may not modify, adapt, translate, reverse engineer, decompile, disassemble, or create derivative works based on the font software without prior written consent.
          </p>
        </PolicySection>

        <PolicySection title="Term and Termination">
          <p>
            The license remains effective until terminated. We reserve the right to terminate your license for any violation of these terms.
          </p>
        </PolicySection>
      </div>
    </div>
  </div>
);

export default  LicenseAgreementPage;