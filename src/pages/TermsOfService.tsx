import { motion } from 'framer-motion';

const TermsOfService = () => {
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
            <span className="text-secondary font-black text-[10px] uppercase tracking-[0.5em]">Standard Conditions</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-none mb-16 tracking-tighter">
            Terms of <br /><span className="text-secondary italic font-light">Service</span>
          </h1>
        </motion.div>

        <div className="prose prose-invert prose-lg max-w-none space-y-12 text-gray-400 font-light leading-relaxed text-left">
          <section className="space-y-6 text-left">
            <h2 className="text-white font-black uppercase text-2xl tracking-tight text-left">1. Acceptance of Terms</h2>
            <p className="text-left">
              By accessing and using this website, you agree to comply with and be bound by the following terms and conditions. 
              If you disagree with any part of these terms, please do not use our website.
            </p>
          </section>

          <section className="space-y-6 text-left">
            <h2 className="text-white font-black uppercase text-2xl tracking-tight text-left">2. Intellectual Property</h2>
            <p className="text-left">
              The content, design, logo, and visual elements of this website are the intellectual property of Mementoes Trading. 
              Unauthorized reproduction or use of these materials is strictly prohibited without explicit written consent.
            </p>
          </section>

          <section className="space-y-6 text-left">
            <h2 className="text-white font-black uppercase text-2xl tracking-tight text-left">3. Use of Contact Forms</h2>
            <p className="text-left">
              Our contact forms are intended for legitimate business inquiries. You agree not to use these forms for:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-left">
              <li>Spamming or sending unsolicited promotional content.</li>
              <li>Submitting fraudulent or misleading information.</li>
              <li>Distributing malicious code or attempting to compromise site security.</li>
            </ul>
          </section>

          <section className="space-y-6 text-left">
            <h2 className="text-white font-black uppercase text-2xl tracking-tight text-left">4. Disclaimer of Liability</h2>
            <p className="text-left">
              While we strive for absolute precision in the information presented, Mementoes Trading provides this website on an "as-is" basis. 
              We are not liable for any direct or indirect damages arising from the use of this site or its content.
            </p>
          </section>

          <section className="space-y-6 text-left">
            <h2 className="text-white font-black uppercase text-2xl tracking-tight text-left">5. Governing Law</h2>
            <p className="text-left">
              These terms are governed by and construed in accordance with the laws of the **Republic of South Africa**. 
              Any disputes arising from these terms will be subject to the exclusive jurisdiction of the South African courts.
            </p>
          </section>

          <section className="space-y-6 text-left">
            <h2 className="text-white font-black uppercase text-2xl tracking-tight text-left">6. Modifications</h2>
            <p className="text-left">
              We reserve the right to revise these terms at any time. By continuing to use the website after changes are posted, 
              you agree to be bound by the updated terms.
            </p>
          </section>

          <section className="space-y-6 text-left">
            <h2 className="text-white font-black uppercase text-2xl tracking-tight text-left">7. Contact</h2>
            <p className="text-left">
              For legal inquiries regarding these terms, please contact us at:<br />
              <span className="text-secondary font-bold">info@mementoes.co.za</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
