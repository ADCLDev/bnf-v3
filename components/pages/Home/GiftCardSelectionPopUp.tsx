// components/pages/Home/GiftCardSelectionPopUp
"use client"
import React, { useState } from 'react';
import { Plus, Check, Gift } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface GiftCardData {
  amount: string;
  price: string;
  downloads: number;
  libraryAccess: string;
  licenseType: string;
  devices: number;
  variant: 'blue' | 'purple' | 'green';
}

const GiftCardPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const giftCards: GiftCardData[] = [
    {
      amount: '10 Downloads',
      price: '৳ 1000',
      downloads: 10,
      libraryAccess: 'Entire Library',
      licenseType: 'Commercial',
      devices: 1,
      variant: 'blue'
    },
    {
      amount: '20 Downloads',
      price: '৳ 1800',
      downloads: 20,
      libraryAccess: 'Entire Library',
      licenseType: 'Commercial',
      devices: 2,
      variant: 'purple'
    },
    {
      amount: '50 Downloads',
      price: '৳ 4000',
      downloads: 50,
      libraryAccess: 'Entire Library',
      licenseType: 'Commercial',
      devices: 5,
      variant: 'green'
    }
  ];

  const getVariantStyles = (variant: string) => {
    const styles = {
      blue: {
        background: 'bg-blue-50',
        border: 'border-blue-200',
        button: 'bg-blue-600 hover:bg-blue-700 text-white',
        icon: 'text-blue-600'
      },
      purple: {
        background: 'bg-purple-50',
        border: 'border-purple-200',
        button: 'bg-purple-600 hover:bg-purple-700 text-white',
        icon: 'text-purple-600'
      },
      green: {
        background: 'bg-green-50',
        border: 'border-green-200',
        button: 'bg-green-600 hover:bg-green-700 text-white',
        icon: 'text-green-600'
      }
    };
    return styles[variant as keyof typeof styles];
  };

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
              <DialogTitle className="text-xl sm:text-2xl font-bold text-center flex items-center justify-center gap-2">
                <Gift className="h-6 w-6" />
                Choose Your Gift Card
              </DialogTitle>
            </DialogHeader>
            
            <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 py-4 max-w-5xl mx-auto">
                {giftCards.map((card) => {
                  const styles = getVariantStyles(card.variant);
                  
                  return (
                    <Card 
                      key={card.amount} 
                      className={`relative p-6 lg:p-8 flex flex-col ${styles.background} ${styles.border} border-2`}
                    >
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className={`${styles.button} px-4 py-1 rounded-full text-sm font-medium`}>
                          Gift Card
                        </span>
                      </div>
                      
                      <div className="text-center mb-6">
                        <h3 className="text-xl lg:text-2xl font-bold mb-2">{card.amount}</h3>
                        <div className="text-3xl lg:text-4xl font-bold mb-1">
                          <span className="font-normal text-xl lg:text-2xl">৳</span> {card.price.replace('৳ ', '')}
                        </div>
                      </div>
                      
                      <div className="space-y-4 flex-1">
                        <div className="flex items-center text-base lg:text-lg">
                          <Check className={`h-5 w-5 ${styles.icon} mr-3 flex-shrink-0`} />
                          <span>{card.downloads} Downloads</span>
                        </div>
                        <div className="flex items-center text-base lg:text-lg">
                          <Check className={`h-5 w-5 ${styles.icon} mr-3 flex-shrink-0`} />
                          <span>{card.libraryAccess}</span>
                        </div>
                        <div className="flex items-center text-base lg:text-lg">
                          <Check className={`h-5 w-5 ${styles.icon} mr-3 flex-shrink-0`} />
                          <span>{card.licenseType} License</span>
                        </div>
                        <div className="flex items-center text-base lg:text-lg">
                          <Check className={`h-5 w-5 ${styles.icon} mr-3 flex-shrink-0`} />
                          <span>{card.devices} {card.devices === 1 ? 'Device' : 'Devices'}</span>
                        </div>
                      </div>
                      
                      <Button 
                        className={`w-full mt-6 py-6 text-base lg:text-lg font-semibold ${styles.button}`}
                      >
                        Purchase Gift Card
                      </Button>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GiftCardPopup;