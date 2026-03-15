import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#05070a] min-h-screen text-white pt-32 pb-20 px-6 lg:px-16 overflow-x-hidden selection:bg-secondary selection:text-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-secondary"></div>
            <span className="text-secondary font-black text-[10px] uppercase tracking-[0.5em]">Legal Framework</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-none mb-16 tracking-tighter">
            Privacy <br /><span className="text-secondary italic font-light">Policy</span>
          </h1>
        </motion.div>

        <div className="prose prose-invert prose-lg max-w-none space-y-12 text-gray-400 font-light leading-relaxed">
          <section className="space-y-6">
            <h2 className="text-white font-black uppercase text-2xl tracking-tight">1. Introduction</h2>
            <p>
              Mementoes Trading ("we", "us", or "our") is committed to protecting the privacy and security of your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard the data you provide through our website, specifically 
              in accordance with the **Protection of Personal Information Act (POPIA)** of South Africa.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-white font-black uppercase text-2xl tracking-tight">2. Information We Collect</h2>
            <p>Through our digital contact forms, we collect the following personal information:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number (if provided)</li>
              <li>Subject of Inquiry</li>
              <li>Message Content</li>
            </ul>
          </section>

          <section className="space-y-6 text-left">
            <h2 className="text-white font-black uppercase text-2xl tracking-tight text-left">3. Purpose of Collection</h2>
            <p className="text-left">In alignment with POPIA's conditions for lawful processing, your data is collected for specific, explicitly defined purposes:</p>
            <ul className="list-disc pl-6 space-y-3 text-left">
              <li>To respond to direct business inquiries or service requests.</li>
              <li>To provide requested information regarding our logistics, construction, or environmental services.</li>
              <li>To maintain a record of communications for legitimate business purposes.</li>
            </ul>
          </section>

          <section className="space-y-6 text-left">
            <h2 className="text-white font-black uppercase text-2xl tracking-tight text-left">4. Data Security</h2>
            <p className="text-left">
              We implement rigorous technical and organizational measures to prevent unauthorized access, loss, or destruction of your personal information. 
              Submissions via our website are processed through secure serverless architecture and encrypted delivery protocols.
            </p>
          </section>

          <section className="space-y-6 text-left">
            <h2 className="text-white font-black uppercase text-2xl tracking-tight text-left">5. Third-Party Processing</h2>
            <p className="text-left">
              We do not sell or rent your personal data. We only share information with verified service providers (such as Resend for email delivery) 
              necessary to facilitate our communication with you. These providers are contractually obligated to maintain your privacy in 
              compliance with South African law.
            </p>
          </section>

          <section className="space-y-6 text-left">
            <h2 className="text-white font-black uppercase text-2xl tracking-tight text-left">6. Your Rights under POPIA</h2>
            <p className="text-left">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-3 text-left">
              <li>Request access to the personal information we hold about you.</li>
              <li>Request the correction or deletion of your personal information.</li>
              <li>Object to the processing of your data for legitimate reasons.</li>
              <li>Withdraw consent at any time where we rely on consent to process your data.</li>
            </ul>
          </section>

          <section className="space-y-6 text-left">
            <h2 className="text-white font-black uppercase text-2xl tracking-tight text-left">7. Contact Information</h2>
            <p className="text-left">
              For any questions regarding this policy or to exercise your rights, please contact our Information Officer at:<br />
              <span className="text-secondary font-bold">ntsako.khoza@yahoo.com</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
