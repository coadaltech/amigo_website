import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Amigo
            </span>
            <p className="mt-2 text-gray-500 text-sm">
              Connecting people, one message at a time.
            </p>
          </div>
          
          <div className="flex space-x-6 text-sm text-gray-500 font-medium">
            <a href="#delete-data" className="hover:text-red-600 transition-colors">Delete My Data</a>
            <a href="#privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-blue-600 transition-colors">Terms of Service</a>
            <a href="mailto:support@amigoapp.com" className="hover:text-blue-600 transition-colors">Support</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-50 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Amigo App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

