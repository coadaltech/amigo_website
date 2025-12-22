import React from 'react';
import { Scale, FileText, CheckCircle, AlertCircle } from 'lucide-react';

const TermsOfService = () => {
  return (
    <section id="terms" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Terms of Service</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Please read these terms carefully before using Amigo.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-4">
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center text-sm uppercase tracking-wider">
                <FileText className="h-4 w-4 mr-2 text-blue-600" />
                Quick Links
              </h3>
              <nav className="space-y-2 text-sm">
                <a href="#acceptance" className="block text-blue-600 font-medium hover:underline">1. Acceptance</a>
                <a href="#eligibility" className="block text-gray-600 hover:text-blue-600 transition-colors">2. Eligibility</a>
                <a href="#conduct" className="block text-gray-600 hover:text-blue-600 transition-colors">3. User Conduct</a>
                <a href="#liability" className="block text-gray-600 hover:text-blue-600 transition-colors">4. Liability</a>
              </nav>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-12">
            <div id="acceptance" className="scroll-mt-24">
              <div className="flex items-start mb-4">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h3>
                  <p className="text-gray-600 leading-relaxed">
                    By downloading, installing, or using Amigo, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services. We reserve the right to update these terms at any time.
                  </p>
                </div>
              </div>
            </div>

            <div id="eligibility" className="scroll-mt-24">
              <div className="flex items-start mb-4">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">2. Eligibility</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You must be at least 13 years old (or the minimum legal age in your country) to use Amigo. If you are under 18, you represent that your parent or legal guardian has reviewed and agreed to these terms.
                  </p>
                </div>
              </div>
            </div>

            <div id="conduct" className="scroll-mt-24">
              <div className="flex items-start mb-4">
                <AlertCircle className="h-6 w-6 text-orange-500 mr-4 mt-1 shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">3. User Conduct</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    You agree not to use Amigo for any purpose that is prohibited by these terms or by law. Prohibited activities include:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-500">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Harassment or stalking
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Distributing malware
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Spamming or advertising
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Impersonating others
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="liability" className="scroll-mt-24 border-t border-gray-100 pt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Limitation of Liability</h3>
              <p className="text-gray-600 leading-relaxed italic bg-gray-50 p-6 rounded-2xl border-l-4 border-blue-600">
                "AMIGO IS PROVIDED 'AS IS' WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY DAMAGES ARISING FROM YOUR USE OF THE SERVICE."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
