import React from 'react';
import { motion } from 'framer-motion';

const TermsConditions = () => {
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
            Terms & Conditions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Please read these terms carefully. Last updated: February 5, 2026
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
                Welcome to Cognix AI. These Terms and Conditions ("Terms") govern your use of our website <strong>cognixai.com</strong> and our services. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access our services.
              </p>
            </div>

            {/* Acceptance of Terms */}
            <div className="border-b border-gray-700/50 pb-6">
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4 leading-relaxed">
                By accessing and using this website and our services, you accept and agree to be bound by the terms and provisions of this agreement. These Terms apply to all visitors, users, and others who access or use our services.
              </p>
              <p className="leading-relaxed">
                If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.
              </p>
            </div>

            {/* Services Description */}
            <div className="border-b border-gray-700/50 pb-6">
              <h2 className="text-2xl font-bold text-white mb-4">2. Services Description</h2>
              <p className="mb-4 leading-relaxed">
                Cognix AI provides comprehensive digital solutions including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li><strong>Artificial Intelligence Development:</strong> Custom AI solutions, machine learning models, and automation systems</li>
                <li><strong>SEO/AEO/GEO Services:</strong> Search engine optimization, answer engine optimization, and generative engine optimization</li>
                <li><strong>Web Development:</strong> Custom websites, web applications, and e-commerce platforms</li>
                <li><strong>App Development:</strong> Mobile applications for iOS and Android platforms</li>
                <li><strong>Digital Marketing:</strong> Social media marketing, content marketing, and online advertising</li>
                <li><strong>Business Automation:</strong> Process automation and workflow optimization</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                All services are provided subject to these Terms and any additional agreements or specifications agreed upon in writing.
              </p>
            </div>

            {/* User Responsibilities */}
            <div className="border-b border-gray-700/50 pb-6">
              <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
              <p className="mb-4 leading-relaxed">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Provide accurate and complete information when requested</li>
                <li>Maintain the confidentiality of any account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not interfere with or disrupt our services or servers</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </div>

            {/* Payment Terms */}
            <div className="border-b border-gray-700/50 pb-6">
              <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
              
              <h3 className="text-lg font-semibold text-purple-300 mb-3">Pricing and Invoicing</h3>
              <p className="mb-4 leading-relaxed">
                Service fees are determined based on project scope, complexity, and timeline. All prices are quoted in Indian Rupees (INR) unless otherwise specified. Detailed pricing will be provided in project proposals or service agreements.
              </p>

              <h3 className="text-lg font-semibold text-purple-300 mb-3">Payment Schedule</h3>
              <ul className="list-disc list-inside space-y-2 mb-4 text-gray-400">
                <li>Payment terms are typically 50% advance and 50% upon project completion</li>
                <li>For ongoing services, monthly payments may be required</li>
                <li>Large projects may have milestone-based payment schedules</li>
                <li>All invoices are due within 15 days of receipt unless otherwise agreed</li>
              </ul>

              <h3 className="text-lg font-semibold text-purple-300 mb-3">Late Payments</h3>
              <p className="leading-relaxed">
                Late payments may result in service suspension and may incur additional charges. We reserve the right to charge interest on overdue amounts at a rate of 2% per month.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="border-b border-gray-700/50 pb-6">
              <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property Rights</h2>
              
              <h3 className="text-lg font-semibold text-purple-300 mb-3">Our Intellectual Property</h3>
              <p className="mb-4 leading-relaxed">
                All content on our website, including but not limited to text, graphics, logos, images, software, and methodologies, are the property of Cognix AI and are protected by intellectual property laws.
              </p>

              <h3 className="text-lg font-semibold text-purple-300 mb-3">Client Deliverables</h3>
              <p className="mb-4 leading-relaxed">
                Upon full payment, clients receive usage rights to deliverables as specified in the project agreement. This typically includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Right to use and modify delivered code and content</li>
                <li>Ownership of custom-developed solutions</li>
                <li>License to use third-party components as permitted</li>
                <li>Documentation and training materials</li>
              </ul>

              <h3 className="text-lg font-semibold text-purple-300 mb-3">Restrictions</h3>
              <p className="leading-relaxed">
                Clients may not resell, redistribute, or claim ownership of our proprietary methodologies, frameworks, or tools unless explicitly agreed upon in writing.
              </p>
            </div>

            {/* Confidentiality */}
            <div className="border-b border-gray-700/50 pb-6">
              <h2 className="text-2xl font-bold text-white mb-4">6. Confidentiality</h2>
              <p className="mb-4 leading-relaxed">
                Both parties agree to maintain strict confidentiality regarding:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Proprietary business information</li>
                <li>Technical specifications and methodologies</li>
                <li>Customer data and personal information</li>
                <li>Financial information</li>
                <li>Strategic plans and business processes</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                This confidentiality obligation survives termination of our business relationship and continues indefinitely unless information becomes publicly available through no fault of the receiving party.
              </p>
            </div>

            {/* Service Level Agreements */}
            <div className="border-b border-gray-700/50 pb-6">
              <h2 className="text-2xl font-bold text-white mb-4">7. Service Level Agreements</h2>
              
              <h3 className="text-lg font-semibold text-purple-300 mb-3">Project Delivery</h3>
              <p className="mb-4 leading-relaxed">
                We strive to deliver projects within agreed timelines. Delivery schedules are estimates and may be affected by:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 text-gray-400">
                <li>Client feedback and revision cycles</li>
                <li>Scope changes or additional requirements</li>
                <li>Third-party dependencies</li>
                <li>Force majeure events</li>
              </ul>

              <h3 className="text-lg font-semibold text-purple-300 mb-3">Support and Maintenance</h3>
              <p className="leading-relaxed">
                Post-launch support terms vary by project and are specified in individual service agreements. We typically provide:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Bug fixes and technical support</li>
                <li>Performance monitoring</li>
                <li>Security updates</li>
                <li>Documentation and training</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className="border-b border-gray-700/50 pb-6">
              <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
              <p className="mb-4 leading-relaxed">
                To the maximum extent permitted by law, Cognix AI shall not be liable for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of profits, revenue, or business opportunities</li>
                <li>Data loss or corruption</li>
                <li>Third-party claims or actions</li>
                <li>Damages resulting from force majeure events</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                Our total liability for any claim shall not exceed the amount paid by the client for the specific service giving rise to the claim.
              </p>
            </div>

            {/* Warranties and Disclaimers */}
            <div className="border-b border-gray-700/50 pb-6">
              <h2 className="text-2xl font-bold text-white mb-4">9. Warranties and Disclaimers</h2>
              
              <h3 className="text-lg font-semibold text-purple-300 mb-3">Our Warranties</h3>
              <p className="mb-4 leading-relaxed">
                We warrant that our services will be performed with professional skill and care in accordance with industry standards. We guarantee that delivered work will be free from material defects for a period of 30 days after delivery.
              </p>

              <h3 className="text-lg font-semibold text-purple-300 mb-3">Disclaimers</h3>
              <p className="leading-relaxed">
                Except as expressly stated, all services are provided "as is" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>
            </div>

            {/* Termination */}
            <div className="border-b border-gray-700/50 pb-6">
              <h2 className="text-2xl font-bold text-white mb-4">10. Termination</h2>
              
              <h3 className="text-lg font-semibold text-purple-300 mb-3">Termination by Either Party</h3>
              <p className="mb-4 leading-relaxed">
                Either party may terminate ongoing services with 30 days written notice. Project-based work cannot be terminated once commenced without mutual agreement.
              </p>

              <h3 className="text-lg font-semibold text-purple-300 mb-3">Immediate Termination</h3>
              <p className="mb-4 leading-relaxed">
                We may terminate services immediately if:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Client breaches these Terms</li>
                <li>Payment is overdue by more than 30 days</li>
                <li>Client engages in illegal or unethical activities</li>
                <li>Client violates confidentiality agreements</li>
              </ul>

              <h3 className="text-lg font-semibold text-purple-300 mb-3">Effect of Termination</h3>
              <p className="leading-relaxed">
                Upon termination, client remains liable for all fees incurred up to the termination date. We will provide completed work and transfer relevant materials as agreed.
              </p>
            </div>

            {/* Force Majeure */}
            <div className="border-b border-gray-700/50 pb-6">
              <h2 className="text-2xl font-bold text-white mb-4">11. Force Majeure</h2>
              <p className="leading-relaxed">
                Neither party shall be liable for any failure or delay in performance due to circumstances beyond their reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, government actions, pandemics, or technical failures of third-party services.
              </p>
            </div>

            {/* Governing Law */}
            <div className="border-b border-gray-700/50 pb-6">
              <h2 className="text-2xl font-bold text-white mb-4">12. Governing Law and Jurisdiction</h2>
              <p className="mb-4 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts in Noida, Uttar Pradesh, India.
              </p>
              <p className="leading-relaxed">
                Both parties agree to attempt to resolve disputes through good faith negotiations before pursuing legal action.
              </p>
            </div>

            {/* Modifications */}
            <div className="border-b border-gray-700/50 pb-6">
              <h2 className="text-2xl font-bold text-white mb-4">13. Modifications to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any modifications constitutes acceptance of the updated Terms. We recommend reviewing these Terms periodically.
              </p>
            </div>

            {/* Severability */}
            <div className="border-b border-gray-700/50 pb-6">
              <h2 className="text-2xl font-bold text-white mb-4">14. Severability</h2>
              <p className="leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
              </p>
            </div>

            {/* Entire Agreement */}
            <div className="border-b border-gray-700/50 pb-6">
              <h2 className="text-2xl font-bold text-white mb-4">15. Entire Agreement</h2>
              <p className="leading-relaxed">
                These Terms, together with any additional agreements or proposals, constitute the entire agreement between you and Cognix AI regarding the use of our services and supersede all prior agreements and understandings.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">16. Contact Information</h2>
              <p className="mb-4 leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30">
                <div className="space-y-2">
                  <p><strong className="text-purple-300">Company:</strong> Cognix AI</p>
                  <p><strong className="text-purple-300">Email:</strong> cognixpvtltb@gmail.com</p>
                  <p><strong className="text-purple-300">Phone:</strong> +91 7991955775</p>
                  <p><strong className="text-purple-300">Address:</strong> Noida, Uttar Pradesh, India</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-400">
                By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
            </div>

          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default TermsConditions;
