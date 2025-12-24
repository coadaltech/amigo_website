"use client";

import React, { useState } from 'react';
import { Trash2, Send, CheckCircle, AlertCircle } from 'lucide-react';

const DataDeletionForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    reason: 'Account deletion and data removal',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="delete-data" className="py-24 bg-red-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-red-900/5 border border-red-100 overflow-hidden">
          <div className="md:flex">
            {/* Info Panel */}
            <div className="md:w-1/3 bg-red-600 p-10 text-white">
              <Trash2 className="h-12 w-12 mb-6 opacity-80" />
              <h2 className="text-3xl font-bold mb-4">Data Deletion</h2>
              <p className="text-red-100 mb-8 text-sm leading-relaxed">
                We respect your right to be forgotten. Fill out this form to request the permanent removal of your account and all associated data.
              </p>
              <div className="space-y-4 text-sm">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 mr-3 text-red-200 shrink-0" />
                  <span>Your profile will be removed within 48 hours.</span>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 mr-3 text-red-200 shrink-0" />
                  <span>This action is permanent and cannot be undone.</span>
                </div>
              </div>
            </div>

            {/* Form Panel */}
            <div className="md:w-2/3 p-10 lg:p-12">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none text-gray-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Phone Number (with country code)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 890"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none text-gray-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="reason" className="block text-sm font-bold text-gray-700 mb-2">Request Details</label>
                    <textarea
                      id="reason"
                      name="reason"
                      rows={3}
                      value={formData.reason}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none text-gray-900 resize-none"
                    ></textarea>
                  </div>
                  
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-red-600 text-white font-bold py-4 px-6 rounded-2xl hover:bg-red-700 focus:ring-4 focus:ring-red-200 transition-all flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-red-200"
                    >
                      {isLoading ? (
                        <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <span>Submit Deletion Request</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-center text-xs text-gray-400">
                    By submitting, you confirm that you are the owner of the account associated with the phone number provided.
                  </p>
                </form>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-fade-in">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received</h3>
                  <p className="text-gray-600 mb-8">
                    Thank you, <strong>{formData.name}</strong>. Your request for data deletion has been submitted successfully. Our team will process it within 48 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-red-600 font-bold hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataDeletionForm;

