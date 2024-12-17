// app/(root)/faqs/page.tsx
import React from 'react';
import Link from 'next/link';
import { ChevronRight, MessageCircle, Phone, Mail, Facebook } from 'lucide-react';

interface FAQVideoCard {
  title: string;
  description: string[];
  youtubeEmbedId: string;
  background: string;
  icon: string;
  softwareType: string;
}

const FAQCard = ({ title, description, youtubeEmbedId, background, icon, softwareType }: FAQVideoCard) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
    {/* Video Section */}
    <div className={`aspect-video w-full relative ${background}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${youtubeEmbedId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <img src={icon} alt={softwareType} className="w-8 h-8" />
        <span className="text-white font-medium">Tutorial by Bengal Fonts</span>
      </div>
    </div>
    
    {/* Content Section */}
    <div className="p-8">
      <h3 className="text-2xl font-bold mb-6">{title}</h3>
      <div className="space-y-4">
        {description.map((step, index) => (
          <div key={index} className="flex items-start gap-3 group">
            <ChevronRight className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
            <p className="text-gray-700 leading-relaxed">{step}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Floating WhatsApp Button Component
const WhatsAppButton = () => (
  <Link
    href="https://wa.me/+8801763419261"
    target="_blank"
    className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 group"
  >
    <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
  </Link>
);

// Support Card Component
const SupportCard = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-purple-700" />
    </div>
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FAQPage = () => {
  const faqVideos: FAQVideoCard[] = [
    {
      title: "How to fix Bangla typing issues in Adobe Illustrator?",
      youtubeEmbedId: "WikfQ87YKtc",
      background: "bg-gradient-to-br from-orange-500 to-orange-600",
      icon: "/api/placeholder/32/32",
      softwareType: "Adobe Illustrator",
      description: [
        "Ensure you're using the correct Bangla font that supports Unicode encoding for proper character display.",
        "Check the 'Middle Eastern & South Asian' text engine option in the 'Preferences' settings panel.",
        "Set your keyboard input method to Bangla in your system settings."
      ]
    },
    {
      title: "How to resolve Bangla typing issues in Adobe Photoshop?",
      youtubeEmbedId: "7s_s86g7xV4",
      background: "bg-gradient-to-br from-cyan-500 to-cyan-600",
      icon: "/api/placeholder/32/32",
      softwareType: "Adobe Photoshop",
      description: [
        "Enable the 'Middle Eastern & South Asian' text engine in the 'Preferences' panel for proper text rendering.",
        "Use a Bangla-compatible font that supports OpenType features for optimal display.",
        "Verify your system's language settings to include proper Bangla input support."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            If you need more assistance, please contact us through our website or send us a message on our Facebook page.
          </p>
        </div>

        {/* FAQ Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {faqVideos.map((faq, index) => (
            <FAQCard key={index} {...faq} />
          ))}
        </div>

        {/* Support Section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Need Additional Support?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SupportCard 
              icon={Phone}
              title="Phone Support"
              description="Call our support team for immediate assistance with your font-related issues."
            />
            <SupportCard 
              icon={Mail}
              title="Email Support"
              description="Send us a detailed email about your problem, and we'll respond within 24 hours."
            />
            <SupportCard 
              icon={Facebook}
              title="Facebook Support"
              description="Connect with us on Facebook for quick responses and community help."
            />
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default FAQPage;