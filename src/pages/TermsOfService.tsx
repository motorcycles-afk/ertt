import React from 'react';
import { Scale } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-8">
            <Scale className="h-8 w-8 text-green-400 mr-3" />
            <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300">Last updated: March 15, 2024</p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300">
              By accessing and using ErtixNodes services, you agree to be bound by these Terms of Service.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Service Description</h2>
            <p className="text-gray-300">
              ErtixNodes provides free VPS hosting services. We reserve the right to modify, suspend, or discontinue any aspect of the service at any time.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. User Responsibilities</h2>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li>Maintain account security</li>
              <li>Use services legally and ethically</li>
              <li>Not engage in abuse or unauthorized access</li>
              <li>Not use services for illegal activities</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Fair Usage Policy</h2>
            <p className="text-gray-300">
              To ensure quality service for all users:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li>Resource limits must be respected</li>
              <li>Cryptocurrency mining is prohibited</li>
              <li>Inactive VPS instances may be terminated after 30 days</li>
              <li>One VPS per user unless authorized</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Service Availability</h2>
            <p className="text-gray-300">
              While we strive for 99.9% uptime, we provide no guarantees regarding service availability or data preservation.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Termination</h2>
            <p className="text-gray-300">
              We reserve the right to terminate services for violations of these terms or for any other reason at our discretion.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-300">
              ErtixNodes is not liable for any damages or losses related to your use of our services.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Changes to Terms</h2>
            <p className="text-gray-300">
              We may modify these terms at any time. Continued use of our services constitutes acceptance of updated terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;