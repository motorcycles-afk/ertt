import React from 'react';
import { Shield } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-8">
            <Shield className="h-8 w-8 text-green-400 mr-3" />
            <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300">Last updated: March 15, 2024</p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-gray-300">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li>Discord account information</li>
              <li>Email address</li>
              <li>VPS usage data</li>
              <li>System logs</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-300">We use the collected information to:</p>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li>Provide and maintain our services</li>
              <li>Monitor and prevent abuse</li>
              <li>Send service updates</li>
              <li>Improve our services</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Data Security</h2>
            <p className="text-gray-300">
              We implement appropriate security measures to protect your personal information.
              However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Data Retention</h2>
            <p className="text-gray-300">
              We retain your data for as long as your account is active or as needed to provide services.
              Inactive accounts may be deleted after 30 days.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Your Rights</h2>
            <p className="text-gray-300">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li>Access your personal data</li>
              <li>Request data deletion</li>
              <li>Object to data processing</li>
              <li>Request data correction</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Contact Us</h2>
            <p className="text-gray-300">
              For any privacy-related questions, please contact us through our Discord server.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;