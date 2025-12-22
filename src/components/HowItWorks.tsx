import React from 'react';
import { UserPlus, MessageSquare, ShieldCheck } from 'lucide-react';

const steps = [
  {
    title: 'Create Account',
    description: 'Sign up in seconds with just your phone number. No complex passwords needed.',
    icon: UserPlus,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    title: 'Find Friends',
    description: 'Sync your contacts to instantly see who else is on Amigo and start chatting.',
    icon: MessageSquare,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
  },
  {
    title: 'Chat Securely',
    description: 'Enjoy peace of mind with end-to-end encryption on every single message.',
    icon: ShieldCheck,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">Process</h2>
          <h3 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            How Amigo Works
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Getting started with Amigo is easier than you think. 
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (visible on desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={step.title} className="flex flex-col items-center group">
                <div className={`w-20 h-20 ${step.bgColor} rounded-3xl flex items-center justify-center mb-8 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-gray-100`}>
                  <step.icon className={`h-10 w-10 ${step.color}`} />
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center font-bold text-gray-400 text-sm">
                    {index + 1}
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h4>
                <p className="text-center text-gray-600 leading-relaxed px-4">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

