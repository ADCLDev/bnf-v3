// components/pages/Home/TypeToolPopUp
"use client"
import React, { useState } from 'react';
import { Plus, Check, Type } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ToolSubscription {
  name: string;
  icon: string;
  price: string;
  duration: string;
  generationLimit: number;
  libraryAccess: string;
  licenseType: string;
  devices: number;
  bgColor: string;
  textColor: string;
}

const TypeToolPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const tools = [
    {
      name: 'Writer',
      icon: '✍️',
      price: '$19.99',
      duration: '15 Days',
      generationLimit: 50,
      libraryAccess: 'Entire Library',
      licenseType: 'Private',
      devices: 1,
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-800'
    },
    {
      name: 'Web Designer',
      icon: '💻',
      price: '$34.99',
      duration: '30 Days',
      generationLimit: 100,
      libraryAccess: 'Entire Library',
      licenseType: 'Private',
      devices: 2,
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-800'
    },
    {
      name: 'Creator',
      icon: '🎨',
      price: '$89.99',
      duration: '90 Days',
      generationLimit: 250,
      libraryAccess: 'Entire Library',
      licenseType: 'Private',
      devices: 5,
      bgColor: 'bg-green-100',
      textColor: 'text-green-800'
    }
  ];

  const getToolStyles = (tool: ToolSubscription) => {
    const baseColor = tool.bgColor.split('-')[1];
    return {
      card: `${tool.bgColor} border-${baseColor}-200`,
      button: `bg-${baseColor}-600 hover:bg-${baseColor}-700 text-white`,
      badge: `${tool.bgColor} ${tool.textColor}`,
      icon: tool.textColor
    };
  };

  return (
    <div>
      <Button 
        onClick={() => setIsOpen(true)}
        variant="outline" 
        size="icon"
        className="rounded-full bg-red-500 text-white hover:bg-red-600 hover:text-white text-2xl h-8 w-"
      >
        <Plus className="h-4 w-4" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-[95vw] max-w-[1200px] h-[95vh] md:h-auto md:max-h-[90vh] p-0">
          <div className="h-full flex flex-col overflow-hidden">
            <DialogHeader className="p-4 sm:p-6 flex-shrink-0 border-b">
              <DialogTitle className="text-xl sm:text-2xl font-bold text-center flex items-center justify-center gap-2">
                <Type className="h-6 w-6" />
                Choose Your Type Tool Plan
              </DialogTitle>
            </DialogHeader>
            
            <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 py-4 max-w-5xl mx-auto">
                {tools.map((tool) => {
                  const styles = getToolStyles(tool);
                  
                  return (
                    <Card 
                      key={tool.name} 
                      className={`relative p-6 lg:p-8 flex flex-col ${styles.card} border-2`}
                    >
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className={`px-4 py-1 rounded-full text-sm font-medium ${styles.badge}`}>
                          {tool.icon} {tool.name}
                        </span>
                      </div>
                      
                      <div className="text-center mb-6">
                        <div className="text-3xl lg:text-4xl font-bold mb-1">
                          {tool.price}
                        </div>
                        <div className="text-gray-600 text-base lg:text-lg">{tool.duration}</div>
                      </div>
                      
                      <div className="space-y-4 flex-1">
                        <div className="flex items-center text-base lg:text-lg">
                          <Check className={`h-5 w-5 ${styles.icon} mr-3 flex-shrink-0`} />
                          <span>{tool.generationLimit} Text Generations</span>
                        </div>
                        <div className="flex items-center text-base lg:text-lg">
                          <Check className={`h-5 w-5 ${styles.icon} mr-3 flex-shrink-0`} />
                          <span>{tool.libraryAccess}</span>
                        </div>
                        <div className="flex items-center text-base lg:text-lg">
                          <Check className={`h-5 w-5 ${styles.icon} mr-3 flex-shrink-0`} />
                          <span>{tool.licenseType} License</span>
                        </div>
                        <div className="flex items-center text-base lg:text-lg">
                          <Check className={`h-5 w-5 ${styles.icon} mr-3 flex-shrink-0`} />
                          <span>{tool.devices} {tool.devices === 1 ? 'Device' : 'Devices'}</span>
                        </div>
                      </div>
                      
                      <Button 
                        className={`w-full mt-6 py-6 text-base lg:text-lg font-semibold ${styles.button}`}
                      >
                        Select {tool.name} Plan
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

export default TypeToolPopup;