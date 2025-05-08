import React from 'react';

const Footer = () => {
  return (
    <div className="bg-base-300 text-base-content  py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        
        <div>
          <h1 className="text-xl font-bold text-indigo-500 mb-2">SocialSphere</h1>
          <p className="text-sm text-gray-400">
            Connecting people through unforgettable events. Join, host, and explore happenings around you.
          </p>
        </div>

        
        <div>
          <h1 className="text-lg font-semibold mb-2">Links</h1>
          <p className="text-sm hover:underline cursor-pointer">Terms & Conditions</p>
          <p className="text-sm hover:underline cursor-pointer">Privacy Policy</p>
          <p className="text-sm hover:underline cursor-pointer">Contact Us</p>
        </div>

        
        <div>
          <h1 className="text-lg font-semibold mb-2">Follow Us</h1>
          <p className="text-sm">🌐 Facebook</p>
          <p className="text-sm">🐦 Twitter</p>
          <p className="text-sm">📸 Instagram</p>
        </div>

      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SocialSphere. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
