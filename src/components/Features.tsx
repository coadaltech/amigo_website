import React from 'react';
import { Shield, Zap, Globe, Heart, Lock, Smartphone } from 'lucide-react';

const features = [
  {
    name: 'End-to-End Encryption',
    description: 'Your messages are for your eyes only. We use state-of-the-art encryption to keep your data private.',
    icon: Lock,
    color: 'bg-blue-500',
    shadow: 'shadow-blue-200',
  },
  {
    name: 'Lightning Fast',
    description: 'Messages delivered in real-time. No delays, no lag, just instant communication.',
    icon: Zap,
    color: 'bg-yellow-500',
    shadow: 'shadow-yellow-200',
  },
  {
    name: 'Global Access',
    description: 'Connect with friends and family anywhere in the world, absolutely free.',
    icon: Globe,
    color: 'bg-green-500',
    shadow: 'shadow-green-200',
  },
  {
    name: 'Built for Privacy',
    description: "We don't sell your data. Your privacy is our priority, not our product.",
    icon: Shield,
    color: 'bg-indigo-500',
    shadow: 'shadow-indigo-200',
  },
  {
    name: 'Simple & Elegant',
    description: 'A clean, intuitive interface that makes chatting a joy for everyone.',
    icon: Smartphone,
    color: 'bg-purple-500',
    shadow: 'shadow-purple-200',
  },
  {
    name: 'Made with Love',
    description: 'Developed with passion to provide the best user experience possible.',
    icon: Heart,
    color: 'bg-red-500',
    shadow: 'shadow-red-200',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">Features</h2>
          <h3 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Everything you need in a chat app
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Amigo is packed with features that make communication simple, secure, and delightful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="group bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 hover:-translate-y-2">
              <div className={`w-14 h-14 ${feature.color} ${feature.shadow} rounded-2xl flex items-center justify-center mb-8 transform transition-transform duration-500 group-hover:rotate-[360deg]`}>
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{feature.name}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
