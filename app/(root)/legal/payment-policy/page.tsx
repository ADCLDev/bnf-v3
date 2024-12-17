// app/(root)/legal/payment-policy/page.tsx
import PolicyHeader from "@/components/legal/PolicyHeader";
import PolicySection from "@/components/legal/PolicySection";
import { CreditCard } from "lucide-react";

const PaymentPolicyPage = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <PolicyHeader
          title="Payment Policy"
          description="Secure and convenient payment options for all your font purchases."
          icon={CreditCard}
        />
        
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <PolicySection title="Accepted Payment Methods">
            <p>
              We accept major credit cards, debit cards, and digital payment methods including PayPal. All transactions are processed securely through our payment partners.
            </p>
          </PolicySection>
  
          <PolicySection title="Currency and Pricing">
            <p>
              All prices are listed in USD and BDT. The final charge will be in your local currency based on current exchange rates.
            </p>
          </PolicySection>
  
          <PolicySection title="Payment Security">
            <p>
              All payment information is encrypted using industry-standard SSL technology. We do not store your complete credit card information on our servers.
            </p>
          </PolicySection>
  
          <PolicySection title="Billing Issues">
            <p>
              If you notice any discrepancies in your billing, please contact our support team within 30 days of the charge.
            </p>
          </PolicySection>
        </div>
      </div>
    </div>
  );

export default PaymentPolicyPage;