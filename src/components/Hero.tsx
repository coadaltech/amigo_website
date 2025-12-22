import React from 'react';
import { ArrowRight, MessageCircle, Shield, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-50 text-blue-600 mb-6 border border-blue-100 animate-fade-in">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            New: Enhanced Security Features
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 animate-fade-up">
            Connect with <span className="text-blue-600">Amigo</span>
            <br />
            Simple. Secure. Fast.
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s' }}>
            The modern chat app designed to keep you connected with the people who matter most. 
            Experience seamless messaging with military-grade encryption.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-200/50 flex items-center justify-center group">
              Download on Play Store
              <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-2xl font-bold text-lg hover:border-gray-300 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 -z-10 left-1/2 -translate-x-1/2 blur-3xl opacity-20 pointer-events-none animate-fade-in">
        <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#60a5fa] to-[#818cf8]"></div>
      </div>
      
      <div className="absolute top-1/4 right-0 -z-10 blur-3xl opacity-10 pointer-events-none">
        <div className="aspect-square w-96 bg-blue-400 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
