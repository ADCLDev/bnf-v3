// app/(root)/legal/refund-policy/page.tsx
import PolicySection from "@/components/legal/PolicySection";
import PolicyHeader from "@/components/legal/PolicyHeader";
import { RefreshCcw } from "lucide-react";

const RefundPolicyPage = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <PolicyHeader
          title="Refund Policy"
          description="Our commitment to customer satisfaction includes a clear and fair refund policy."
          icon={RefreshCcw}
        />
        
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <PolicySection title="Digital Products">
            <p>
              Due to the nature of digital font files, all sales are final once the font has been downloaded. We do not offer refunds for downloaded fonts.
            </p>
          </PolicySection>
  
          <PolicySection title="Before Download">
            <p>
              If you haven&apos;t downloaded the font file yet, you may request a refund within 24 hours of purchase. Contact our support team with your order details.
            </p>
          </PolicySection>
  
          <PolicySection title="Subscription Refunds">
            <p>
              For subscription plans, you may cancel at any time. Refunds are prorated based on the unused portion of your subscription period.
            </p>
          </PolicySection>
  
          <PolicySection title="Technical Issues">
            <p>
              If you experience technical issues with our products, please contact our support team before requesting a refund. We&apos;re committed to resolving any technical problems.
            </p>
          </PolicySection>
        </div>
      </div>
    </div>
  );

  export default RefundPolicyPage