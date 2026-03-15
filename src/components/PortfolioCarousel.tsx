import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const portfolioItems = [
  {
    title: "Civil Infrastructure Project",
    category: "Construction",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200",
    description: "Major road and drainage infrastructure development."
  },
  {
    title: "Eco-Waste Management Fleet",
    category: "Environmental",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1200",
    description: "Deployment of specialized waste handling units."
  },
  {
    title: "Regional Logistics Hub",
    category: "Logistics",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200",
    description: "Supply chain management and material transport."
  },
  {
    title: "Industrial Building Site",
    category: "Construction",
    image: "https://images.unsplash.com/photo-1541888941259-7927ad9a4c28?q=80&w=1200",
    description: "Foundation and structural work for commercial premises."
  }
];

export const PortfolioCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    // Initial call after a frame to avoid React render cycle warning
    const timeout = setTimeout(() => {
      onSelect();
    }, 0);

    emblaApi.on('select', onSelect);
    return () => {
      clearTimeout(timeout);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-3">Portfolio</h2>
            <h3 className="text-4xl font-extrabold text-primary mb-6">Excellence in Action</h3>
            <p className="text-gray-600">
              A glimpse into the diverse projects we've successfully delivered across South Africa. From complex construction sites to streamlined logistics operations.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={scrollPrev}
              className="w-12 h-12 border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-lg"
            >
              <i className="bi bi-chevron-left text-xl"></i>
            </button>
            <button 
              onClick={scrollNext}
              className="w-12 h-12 border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-lg"
            >
              <i className="bi bi-chevron-right text-xl"></i>
            </button>
          </div>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex gap-6">
            {portfolioItems.map((item, index) => (
              <div 
                key={index} 
                className="embla__slide flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_35%] relative group"
              >
                <div className="relative h-[500px] overflow-hidden shadow-2xl">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="absolute bottom-0 left-0 p-8 w-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 bg-secondary text-white text-[10px] font-bold uppercase tracking-widest mb-3">
                      {item.category}
                    </span>
                    <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              className={`h-2 transition-all duration-300 ${
                selectedIndex === index ? 'w-8 bg-secondary' : 'w-2 bg-gray-300'
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioCarousel;
