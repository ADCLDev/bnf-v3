// app/(user)/welcome/page.tsx
'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Add this import
import { Pencil, Laptop, Palette, Gift } from "lucide-react"; // Add Gift icon
import Link from "next/link";
import WelcomeSection from "@/components/reuseable/WelcomeSection";

const SubscriptionPlans = () => {
  const plans = [
    {
      name: "Basic",
      price: "$19.99",
      duration: "15 Days",
      downloads: 1,
      libraryAccess: "Entire Library",
      licenseType: "Private",
      totalDevices: 1,
      featured: false
    },
    {
      name: "Pro",
      price: "$34.99",
      duration: "30 Days",
      downloads: 3,
      libraryAccess: "Entire Library",
      licenseType: "Private",
      totalDevices: 2,
      featured: true
    },
    {
      name: "Enterprise",
      price: "$89.99",
      duration: "90 Days",
      downloads: 10,
      libraryAccess: "Entire Library",
      licenseType: "Private",
      totalDevices: 5,
      featured: false
    }
  ];

  const toolPlans = [
    {
      name: "Writer",
      price: "$19.99",
      duration: "15 Days",
      generationLimit: 50,
      libraryAccess: "Entire Library",
      licenseType: "Private",
      totalDevices: 1,
      icon: Pencil,
      bgColor: "bg-blue-50"
    },
    {
      name: "Web Designer",
      price: "$34.99",
      duration: "30 Days",
      generationLimit: 100,
      libraryAccess: "Entire Library",
      licenseType: "Private",
      totalDevices: 2,
      icon: Laptop,
      bgColor: "bg-purple-50"
    },
    {
      name: "Creator",
      price: "$89.99",
      duration: "90 Days",
      generationLimit: 250,
      libraryAccess: "Entire Library",
      licenseType: "Private",
      totalDevices: 5,
      icon: Palette,
      bgColor: "bg-green-50"
    }
  ];

  return (
    <div className="container mx-auto px-4 pt-4 pb-8">
      {/* Welcome Section */}
      

      
    
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Welcome Section - Left Side */}
        <WelcomeSection 
          userName="Abdullah Al Rajin"
          userInitial="A"
          subscriptionType="Premium"
          downloadsAvailable={42}
          memberSince="Oct 2023"
        />

        {/* Gift Card Section - Right Side */}
        <div>
          <Card className="bg-gradient-to-br from-purple-50 to-blue-50">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-6">
                <Gift size={32} className="text-purple-600 flex-shrink-0" />
                <div>
                  <div className="text-xl font-bold mb-1">Have a Gift Card?</div>
                  <p className="text-gray-600 text-sm">
                    Enter your gift card code below to redeem your subscription
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <Input 
                  placeholder="Enter gift card code" 
                  className="text-center"
                />
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Redeem Now
                </Button>
              </div>
              <p className="text-xs text-gray-600 mt-4">
                Gift cards are non-refundable and cannot be exchanged for cash
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <br></br>


      {/* Subscription Plans */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Subscription Plans</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative ${plan.featured ? 'border-2 border-blue-500 shadow-lg' : ''}`}>
              <CardHeader>
                <CardTitle className="text-center">
                  <div className="text-xl font-bold mb-1">{plan.name}</div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">{plan.price}</div>
                  <div className="text-sm text-gray-500">{plan.duration}</div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Downloads:</span>
                    <span>{plan.downloads}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Library Access:</span>
                    <span>{plan.libraryAccess}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>License Type:</span>
                    <span>{plan.licenseType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Devices:</span>
                    <span>{plan.totalDevices}</span>
                  </div>
                  <Button 
                    className={`w-full ${plan.featured ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                    variant={plan.featured ? "default" : "outline"}
                  >
                    Choose Plan
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Gift Cards & Licenses */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Gift Cards & Licenses</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card key={plan.name} className="bg-gradient-to-br from-blue-50 to-purple-50">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <div className="text-xl font-bold mb-2">{plan.duration}</div>
                  <div className="text-2xl font-bold text-blue-600">{plan.price}</div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span>Downloads:</span>
                    <span>{plan.downloads}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Library Access:</span>
                    <span>{plan.libraryAccess}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>License Type:</span>
                    <span>{plan.licenseType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Devices:</span>
                    <span>{plan.totalDevices}</span>
                  </div>
                </div>
                <Button className="w-full" variant="outline">
                  Purchase License
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Exclusive Tool Access */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Exclusive Tool Access</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {toolPlans.map((plan) => (
            <Card key={plan.name} className={`${plan.bgColor}`}>
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">
                    <plan.icon size={32} className="text-blue-600" />
                  </div>
                  <div className="text-xl font-bold mb-2">{plan.name}</div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">{plan.price}</div>
                  <div className="text-sm text-gray-500">{plan.duration}</div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span>Generation Limit:</span>
                    <span>{plan.generationLimit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Library Access:</span>
                    <span>{plan.libraryAccess}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>License Type:</span>
                    <span>{plan.licenseType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Devices:</span>
                    <span>{plan.totalDevices}</span>
                  </div>
                </div>
                <Button className="w-full">
                  Access Tool
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Become a Contributor */}
      <div className="text-center max-w-2xl mx-auto bg-white rounded-lg p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Become a Contributor</h2>
        <p className="text-gray-600 mb-6">
          Join our community of innovators and help shape the future of technology. Share your expertise, collaborate on cutting-edge projects, and make a difference.
        </p>
        <Link href={`/apply-for-contributor-access`}>
          <Button className="bg-blue-600 hover:bg-blue-700 mb-4">
            Submit Contributor Application
          </Button>
        </Link>
        
        <p className="text-sm text-gray-500">
          By submitting, you agree to our{" "}
          <Link 
            href={`/legal/terms-of-service/contributors`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-blue-600 hover:underline">Contributor Terms</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SubscriptionPlans;