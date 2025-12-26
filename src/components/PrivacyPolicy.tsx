import React from 'react';
import { Shield, Eye, Lock, Server } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <section id="privacy" className="py-24 bg-gray-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-blue-900/5 border border-gray-100 overflow-hidden">
          <div className="md:flex">
            {/* Sidebar info */}
            <div className="md:w-1/3 bg-blue-600 p-12 text-white">
              <Shield className="h-12 w-12 mb-6 opacity-80" />
              <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
              <p className="text-blue-100 mb-8 text-sm leading-relaxed">
                At Amigo, we believe privacy is a fundamental human right. This policy outlines how we protect that right.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-sm bg-blue-700/50 p-3 rounded-xl border border-blue-500/30">
                  <Lock className="h-4 w-4 mr-3 text-blue-200" />
                  <span>End-to-end encrypted</span>
                </div>
                <div className="flex items-center text-sm bg-blue-700/50 p-3 rounded-xl border border-blue-500/30">
                  <Eye className="h-4 w-4 mr-3 text-blue-200" />
                  <span>No message logging</span>
                </div>
                <div className="flex items-center text-sm bg-blue-700/50 p-3 rounded-xl border border-blue-500/30">
                  <Server className="h-4 w-4 mr-3 text-blue-200" />
                  <span>Secure infrastructure</span>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-blue-500/30">
                <p className="text-xs text-blue-200 uppercase tracking-widest font-bold">Effective Date</p>
                <p className="text-sm font-medium">December 22, 2025</p>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:w-2/3 p-12 lg:p-16 overflow-y-auto max-h-[700px] scrollbar-thin scrollbar-thumb-gray-200">
              <div className="prose prose-blue max-w-none text-gray-600 space-y-8">
                {/* App & Developer Identity */}
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6">
                  <p className="text-gray-700 mb-2">
                    This Privacy Policy applies to the <strong>Amigo Chats</strong> mobile application operated by <strong>Amigo Chats</strong>.
                  </p>
                  <p className="text-gray-700">
                    Website: <a href="https://amigochats.com" className="text-blue-600 font-bold hover:underline">https://amigochats.com</a>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mr-3 text-sm">01</span>
                    Information We Collect
                  </h3>
                  <p>
                    We collect minimal information required to provide our services. This includes your phone number for account verification and your optional profile information (name and photo). We do not collect your contacts unless you explicitly choose to sync them.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mr-3 text-sm">02</span>
                    Messaging Privacy
                  </h3>
                  <p>
                    Amigo Chats is built on the principle of privacy. Your messages are encrypted on your device and can only be decrypted by the intended recipient. Messages are encrypted and designed so that only intended recipients can read them.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mr-3 text-sm">03</span>
                    Data Sharing
                  </h3>
                  <p>
                    We do not sell, rent, or trade your personal data with third parties. We do not use your data for advertising purposes. Information is only shared when required by law or to provide essential service functions (like SMS verification).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mr-3 text-sm">04</span>
                    Security Measures
                  </h3>
                  <p>
                    We employ industry-standard security protocols to protect your data. This includes TLS for data in transit and robust encryption for data at rest on your device. Our servers are monitored 24/7 for unauthorized access.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mr-3 text-sm">05</span>
                    Data Retention Policy
                  </h3>
                  <p>
                    We retain personal data only for as long as necessary to provide our services, comply with legal obligations, or resolve disputes. When data is no longer required, it is securely deleted.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mr-3 text-sm">06</span>
                    Permissions & Usage Disclosure
                  </h3>
                  <p>
                    The app may request access to your camera and storage to allow you to upload profile photos and share media. Contacts are accessed only if you choose to sync them. Notifications are used to alert you of new messages and important updates.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mr-3 text-sm">07</span>
                    User Rights & Data Deletion
                  </h3>
                  <p className="mb-3">
                    You can update your profile information within the app.
                  </p>
                  <p>
                    You may request permanent deletion of your account and associated data by contacting us at <a href="mailto:unetwork62@gmail.com" className="text-blue-600 font-bold hover:underline">unetwork62@gmail.com</a> or by phone at <a href="tel:+15702633896" className="text-blue-600 font-bold hover:underline">+15702633896</a>.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mr-3 text-sm">08</span>
                    Children&apos;s Privacy
                  </h3>
                  <p>
                    Amigo Chats is not intended for children under the age of 13. We do not knowingly collect personal data from children.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mr-3 text-sm">09</span>
                    Policy Updates
                  </h3>
                  <p>
                    We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                  <h4 className="text-blue-900 font-bold mb-2">Have questions?</h4>
                  <p className="text-sm text-blue-800 mb-4">Our privacy team is here to help you understand your rights.</p>
                  <div className="space-y-2">
                    <p>
                      <a href="mailto:unetwork62@gmail.com" className="text-blue-600 font-bold hover:underline">unetwork62@gmail.com</a>
                    </p>
                    <p>
                      <a href="tel:+15702633896" className="text-blue-600 font-bold hover:underline">+15702633896</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
