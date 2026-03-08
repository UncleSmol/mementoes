import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <div className="bg-white min-h-screen pt-32 px-6 lg:px-16 text-left">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-[2px] bg-secondary"></div>
            <span className="text-secondary font-black text-xs tracking-[0.5em] uppercase">Project Showcase</span>
          </div>
          <h1 className="text-6xl md:text-[8rem] font-black text-primary uppercase leading-[0.8] tracking-tighter mb-12">
            Our <br />
            <span className="text-secondary italic font-light text-left">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-500 font-light max-w-2xl mb-24">
            A detailed record of our structural and logistical impact. Full case studies coming soon.
          </p>
        </motion.div>

        {/* Placeholder for project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-gray-100 p-1 mb-32">
           {[1,2,3,4].map((i) => (
             <div key={i} className="aspect-video bg-dark flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-700" />
                <span className="text-white/10 text-9xl font-black">{i}</span>
                <div className="absolute bottom-10 left-10 text-left opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                   <span className="text-secondary font-black text-[10px] uppercase tracking-widest block mb-2">Project</span>
                   <h3 className="text-2xl font-black text-white uppercase">In Development</h3>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
