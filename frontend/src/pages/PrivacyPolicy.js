import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-indigo-900/50 py-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full filter blur-3xl animate-bounce-slow"></div>
        
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Privacy Policy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Your privacy is important to us. Last updated: February 5, 2026
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-3xl p-8 shadow-2xl"
        >
          <div className="space-y-8 text-gray-300">
            
            {/* Introduction */}
            <div className="border-b border-gray-700/50 pb-6">
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p className="leading-relaxed">
                Cognix AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>cognixai.com</strong> or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="border-b border-gray-700/50 pb-6">
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              
              <h3 className="text-lg font-semibold text-purple-300 mb-3">Personal Information</h3>
              <p className="mb-4 leading-relaxed">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 text-gray-400">
                <li>Fill out contact forms or request quotes</li>
                <li>Subscribe to our newsletter</li>
                <li>Engage with our chatbot or WhatsApp</li>
                <li>Create an account or register for services</li>
                <li>Participate in surveys or feedback forms</li>
              </ul>
              
              <p className="mb-4 leading-relaxed">
                This information may include: <strong>name, email address, phone number, company name, job title, project requirements, and any other information you choose to provide.</strong>
              </p>

              <h3 className="text-lg font-semibold text-purple-300 mb-3">Automatically Collected Information</h3>
              <p className="mb-4 leading-relaxed">
                When you visit our website, we may automatically collect certain information about your device and usage patterns:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent</li>
                <li>Referring website</li>
                <li>Device information</li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div className="border-b border-gray-700/50 pb-6">
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p className="mb-4 leading-relaxed">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li><strong>Service Delivery:</strong> To provide, maintain, and improve our AI, SEO, web development, and digital marketing services</li>
                <li><strong>Communication:</strong> To respond to inquiries, send updates, and provide customer support</li>
                <li><strong>Marketing:</strong> To send newsletters, promotional materials, and relevant service information (with your consent)</li>
                <li><strong>Analytics:</strong> To analyze website usage and improve user experience</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
                <li><strong>Security:</strong> To protect against fraud, unauthorized access, and other security threats</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="border-b border-gray-700/50 pb-6">
              <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing and Disclosure</h2>
              <p className="mb-4 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              
              <h3 className="text-lg font-semibold text-purple-300 mb-3">Service Providers</h3>
              <p className="mb-4 leading-relaxed">
                We may share information with trusted third-party service providers who assist us in operating our website and conducting business, such as:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 text-gray-400">
                <li>Email service providers (for newsletters and communications)</li>
                <li>Analytics providers (Google Analytics, etc.)</li>
                <li>Cloud hosting services</li>
                <li>Payment processors</li>
              </ul>

              <h3 className="text-lg font-semibold text-purple-300 mb-3">Legal Requirements</h3>
              <p className="mb-4 leading-relaxed">
                We may disclose your information if required by law or in response to valid legal requests from public authorities.
              </p>
            </div>

            {/* Data Security */}
            <div className="border-b border-gray-700/50 pb-6">
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
              <p className="mb-4 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>SSL encryption for data transmission</li>
                <li>Secure server infrastructure</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </div>

            {/* Your Rights */}
            <div className="border-b border-gray-700/50 pb-6">
              <h2 className="text-2xl font-bold text-white mb-4">5. Your Privacy Rights</h2>
              <p className="mb-4 leading-relaxed">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Restriction:</strong> Request limitation of processing of your information</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                To exercise these rights, please contact us at <strong className="text-purple-300">cognixpvtltb@gmail.com</strong> or <strong className="text-purple-300">+91 7991955775</strong>.
              </p>
            </div>

            {/* Cookies and Tracking */}
            <div className="border-b border-gray-700/50 pb-6">
              <h2 className="text-2xl font-bold text-white mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="mb-4 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files stored on your device. We use:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics Cookies:</strong> To understand how visitors use our site</li>
                <li><strong>Marketing Cookies:</strong> To deliver relevant advertisements</li>
                <li><strong>Preference Cookies:</strong> To remember your settings and preferences</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                You can control cookies through your browser settings. However, disabling cookies may affect website functionality.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="border-b border-gray-700/50 pb-6">
              <h2 className="text-2xl font-bold text-white mb-4">7. Third-Party Links</h2>
              <p className="leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="border-b border-gray-700/50 pb-6">
              <h2 className="text-2xl font-bold text-white mb-4">8. Children's Privacy</h2>
              <p className="leading-relaxed">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
              </p>
            </div>

            {/* International Transfers */}
            <div className="border-b border-gray-700/50 pb-6">
              <h2 className="text-2xl font-bold text-white mb-4">9. International Data Transfers</h2>
              <p className="leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
              </p>
            </div>

            {/* Policy Updates */}
            <div className="border-b border-gray-700/50 pb-6">
              <h2 className="text-2xl font-bold text-white mb-4">10. Policy Updates</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our services after any modifications constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
              <p className="mb-4 leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30">
                <div className="space-y-2">
                  <p><strong className="text-purple-300">Company:</strong> Cognix AI</p>
                  <p><strong className="text-purple-300">Email:</strong> cognixpvtltb@gmail.com</p>
                  <p><strong className="text-purple-300">Phone:</strong> +91 7991955775</p>
                  <p><strong className="text-purple-300">Address:</strong> Noida, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
