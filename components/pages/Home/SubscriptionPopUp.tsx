// components/pages/Home/SubscriptionPopUp
"use client"
import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const SubscriptionPlansPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const plans = [
    {
      name: 'Basic',
      price: '৳ 1000',
      duration: '15 Days',
      downloads: 1,
      libraryAccess: 'Entire Library',
      licenseType: 'Private',
      devices: 1,
      recommended: false
    },
    {
      name: 'Pro',
      price: '৳ 2500',
      duration: '30 Days',
      downloads: 3,
      libraryAccess: 'Entire Library',
      licenseType: 'Private',
      devices: 2,
      recommended: true
    },
    {
      name: 'Enterprise',
      price: '৳ 4000',
      duration: '90 Days',
      downloads: 10,
      libraryAccess: 'Entire Library',
      licenseType: 'Private',
      devices: 5,
      recommended: false
    }
  ];

  return (
    <div>
      <Button 
        onClick={() => setIsOpen(true)}
        variant="outline" 
        size="icon"
        className="rounded-full bg-red-500 text-white hover:bg-red-600 hover:text-white text-2xl h-8 w-8"
      >
        <Plus className="h-4 w-4" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-[95vw] max-w-[1200px] h-[95vh] md:h-auto md:max-h-[90vh] p-0">
          <div className="h-full flex flex-col overflow-hidden">
            <DialogHeader className="p-4 sm:p-6 flex-shrink-0 border-b">
              <DialogTitle className="text-xl sm:text-2xl font-bold text-center">
                Choose Your Subscription Plan
              </DialogTitle>
            </DialogHeader>
            
            <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 py-4 max-w-5xl mx-auto">
                {plans.map((plan) => (
                  <Card 
                    key={plan.name} 
                    className={`relative p-6 lg:p-8 flex flex-col ${
                      plan.recommended ? 'border-2 border-blue-500 shadow-lg' : ''
                    }`}
                  >
                    {plan.recommended && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Recommended
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h3 className="text-xl lg:text-2xl font-bold mb-2">{plan.name}</h3>
                      <div className="text-3xl lg:text-4xl font-bold mb-1">
                        <span className="font-normal text-xl lg:text-2xl">৳</span> {plan.price.replace('৳ ', '')}
                      </div>
                      <div className="text-gray-500 text-base lg:text-lg">{plan.duration}</div>
                    </div>
                    
                    <div className="space-y-4 flex-1">
                      <div className="flex items-center text-base lg:text-lg">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{plan.downloads} Downloads</span>
                      </div>
                      <div className="flex items-center text-base lg:text-lg">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{plan.libraryAccess}</span>
                      </div>
                      <div className="flex items-center text-base lg:text-lg">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{plan.licenseType} License</span>
                      </div>
                      <div className="flex items-center text-base lg:text-lg">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{plan.devices} Devices</span>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full mt-6 py-6 text-base lg:text-lg font-semibold"
                      variant={plan.recommended ? "default" : "outline"}
                    >
                      Select Plan
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SubscriptionPlansPopup;