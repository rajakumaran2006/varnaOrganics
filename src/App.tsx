import React from 'react';
import { ShoppingCart, ChevronDown, Check, Star, ArrowDownCircle, ArrowUpCircle, Mail, Phone, Network, Layers, Box, Sparkles, Wind } from 'lucide-react';

export default function App() {
  const [view, setView] = React.useState<'home' | 'products' | 'consultation'>('home');

  const scrollToProduct = (id: string) => {
    if (id === 'other') {
      setView('consultation');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
      return;
    }
    setView('products');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-stone-800 relative overflow-hidden flex flex-col">
      <Header setView={setView} />
      
      {view === 'home' ? (
        <>
          <Hero setView={setView} />
          <AboutSection />
          <PopularProducts onMoreDetails={scrollToProduct} />
          <WhyChooseUs setView={setView} />
          <FeedbackSection />
          <FAQSection />
          <Footer setView={setView} />
        </>
      ) : view === 'products' ? (
        <>
          <div className="h-[calc(100vh-80px)] overflow-y-auto snap-y snap-mandatory scroll-smooth hide-scrollbar bg-[#f9f8f4]">
            <ProductShowcase 
              id="lib-balm"
              productName="Beetroot Lip Balm"
              title="Everything Has Beauty, But Not Everyone Sees It"
              description="Our Beetroot Lip Balm is formulated with 100% natural extracts, providing deep hydration and a subtle natural tint that lasts all day long."
              image="/p1.png"
              categories={["Lip Care", "Natural", "Organic"]}
              rightContent={{
                heading: "Our team of skin specialists works directly with state-of-the-art technology to create products that provide optimal care.",
                secondaryTitle: "Lip Care",
                secondaryText: "Beetroot is naturally rich in antioxidants that help brighten and nourish your lips while providing a healthy, natural glow."
              }}
            />

            <ProductShowcase 
              id="foot-cream"
              productName="Softening Foot Cream"
              title="Experience Ultimate Softness with Every Step"
              description="Our specialized Foot Cream combines intensive moisture with natural healing properties to soothe tired feet and repair dry, cracked skin."
              image="/p2.png"
              categories={["Foot Care", "Healing", "Intensive"]}
              rightContent={{
                heading: "Crafted by dermatologists, our formulas prioritize deep penetration and long-lasting protection for all skin types.",
                secondaryTitle: "Intensive Repair Formula",
                secondaryText: "Natural salicylic acid from willow bark helps gently exfoliate and soften tough calluses for visible results."
              }}
            />

            <ProductShowcase 
              id="hair-oil"
              productName="Herbal Hair Oil"
              title="Strengthen Your Roots with Natural Potency"
              description="Our specialized Hair Oil is a blend of traditional herbal extracts designed to nourish the scalp, reduce hair fall, and promote healthy growth."
              image="/p3.png"
              categories={["Hair Care", "Nourishment", "Natural"]}
              rightContent={{
                heading: "Formulated based on individual consultation, our hair oil targets root strength and scalp health for comprehensive care.",
                secondaryTitle: "Root Revival Formula",
                secondaryText: "Brahmi and Amla extracts work together to strengthen hair follicles from within, promoting healthy growth."
              }}
            />
            
            {/* Footer inside products scrollable area */}
            <div className="snap-start">
              <Footer setView={setView} />
            </div>
          </div>
        </>
      ) : view === 'consultation' ? (
        <ConsultationView setView={setView} />
      ) : null}
    </div>
  );
}


function WhyChooseUs({ setView }: { setView: (view: 'home' | 'products' | 'consultation') => void }) {
  return (
    <section className="w-full bg-[#fdfdfd] pt-16 pb-0 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10 h-full">
        
        {/* Top left Trusted by badge */}
        <div className="flex items-center gap-3 mb-12 animate-fade-in translate-x-2">
          <div className="flex -space-x-2">
            {[
              "public/people.png",
              "public/people2.png",
              "public/people3.png"
            ].map((src, i) => (
              <img 
                key={i} 
                src={src} 
                className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover bg-stone-100" 
                alt="User" 
              />
            ))}
          </div>
          <p className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em]">
            Trusted by 100+ users
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end pb-32">
          
          {/* Left Column: Title & CTA */}
          <div className="lg:col-span-4 space-y-10 group pb-10">
            <p className="text-[#ff808b] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Why Choose Us
          </p>
            <h2 className="text-[#333333] text-3xl lg:text-5xl font-bold leading-[1.05] tracking-tight transition-transform duration-500 group-hover:translate-x-1">
              Unlock  your skin's <br /> 
              <span className="text-stone-400">potential</span>
            </h2>
            <p className="text-stone-500 text-lg max-w-sm font-medium leading-relaxed opacity-80">
              Our experts understand your face and provide personalized care tailored to your unique needs.
            </p>
            <button 
              onClick={() => setView('consultation')}
              className="bg-[#ff808b] text-white px-10 py-5 rounded-2xl font-bold tracking-wide hover:bg-[#ff6b78] hover:scale-105 transition-all shadow-xl shadow-rose-400/20 active:scale-95"
            >
              Talk to our consultant
            </button>
          </div>

          {/* Center Column: Image */}
          <div className="lg:col-span-4 flex justify-center relative self-stretch">
            {/* Subtle glow behind the image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-rose-100/30 blur-[100px] pointer-events-none rounded-full"></div>
            
            <div className="relative w-full max-w-[500px] h-full flex items-end overflow-hidden group">
              <img 
                src="/WHYUS.png" 
                alt="Skin Analysis" 
                className="w-full h-auto object-contain drop-shadow-[0_-10px_40px_rgba(0,0,0,0.03)]" 
                style={{
                  maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
                }}
              />
            </div>
          </div>

          {/* Right Column: Stats */}
          <div className="lg:col-span-4 space-y-16 lg:pl-16 pb-16">
            <div className="flex items-center gap-8 group">
              <div className="w-14 h-14 flex items-center justify-center text-stone-400 group-hover:text-rose-400 transition-colors duration-300">
                <Network className="w-12 h-12 stroke-[1.25]" />
              </div>
              <div>
                <h3 className="text-4xl font-bold text-[#333333] mb-1">100%</h3>
                <p className="text-[11px] font-bold text-stone-400 uppercase tracking-[0.15em] leading-tight">
                  Expert led<br />consultation
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8 group">
              <div className="w-14 h-14 flex items-center justify-center text-stone-400 group-hover:text-rose-400 transition-colors duration-300">
                <Layers className="w-12 h-12 stroke-[1.25]" />
              </div>
              <div>
                <h3 className="text-4xl font-bold text-[#333333] mb-1">25+</h3>
                <p className="text-[11px] font-bold text-stone-400 uppercase tracking-[0.15em] leading-tight">
                  Herbal<br />formulations
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8 group">
              <div className="w-14 h-14 flex items-center justify-center text-stone-400 group-hover:text-rose-400 transition-colors duration-300">
                <Box className="w-12 h-12 stroke-[1.25]" />
              </div>
              <div>
                <h3 className="text-4xl font-bold text-[#333333] mb-1">Pure</h3>
                <p className="text-[11px] font-bold text-stone-400 uppercase tracking-[0.15em] leading-tight">
                  Natural<br />Ingredients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Header({ setView }: { setView: (view: 'home' | 'products' | 'consultation') => void }) {
  return (
    <header className="w-full z-100 bg-white border-b border-stone-100 sticky top-0">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center gap-4 cursor-pointer group" onClick={() => setView('home')}>
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#ff808b]/20 flex items-center justify-center bg-white group-hover:border-[#ff808b] transition-all">
             <img src="/logo.png" alt="Varna Naturals Logo" className="w-14 h-14 object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold leading-none text-stone-800 uppercase">Varna Naturals</span>
            <span className="text-[11px] text-stone-500 tracking-wider font-medium">Natural Care for Skin, Hair & Wellness</span>
          </div>
        </div>

        {/* Nav - Vertical alignment fix */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-bold text-stone-600 tracking-wide uppercase h-full">
          <button onClick={() => setView('products')} className="hover:text-rose-400 transition-colors uppercase cursor-pointer py-2">PRODUCTS</button>
          <button onClick={() => setView('consultation')} className="hover:text-rose-400 transition-colors uppercase cursor-pointer py-2">Consultation</button>
        </nav>

        {/* Actions - Vertical alignment fix */}
        <div className="flex items-center gap-4 h-full">
          <button 
            onClick={() => { setView('consultation'); setTimeout(() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' }), 100); }}
            className="bg-[#ff808b] hover:bg-[#ff6b78] text-white px-8 py-3.5 rounded-full font-bold tracking-wide transition-all shadow-lg shadow-rose-400/20 active:scale-95 text-xs h-fit"
          >
            GET STARTED
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero({ setView }: { setView: (view: 'home' | 'products' | 'consultation') => void }) {
  return (
    <div className="w-full bg-[#f7f7f7] relative overflow-hidden">
      {/* Decorative Assets - Restricted to Hero Section */}
      <img 
        src="/heroSectionTop.png" 
        alt="Hero Top Decorative" 
        className="absolute top-0 left-0 w-[450px] pointer-events-none z-0 object-contain" 
      />
      
      <img 
        src="/heroSectionTop.png" 
        alt="Hero Bottom Decorative" 
        className="absolute bottom-0 right-0 w-[450px] pointer-events-none z-20 object-contain rotate-180" 
      />

      <main className="max-w-7xl mx-auto w-full px-8 pt-10 pb-28 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        {/* Remove decorative images from here as they are now global/fixed */}

        {/* Left Content */}
        <div className="flex-1 max-w-2xl relative">
          <p className="text-[#ff808b] uppercase tracking-widest text-sm font-bold mb-6 flex items-center gap-2">
            100% ORGANIC PRODUCT
          </p>
          <h1 className="text-[#444444] text-3xl lg:text-[4rem] font-bold leading-[0.95] mb-8 tracking-tight relative">
            Natural Skincare Crafted Through Personalized Care
          </h1>
          <div className="border-l-2 border-[#ff808b]/40 pl-6 mb-10">
            <p className="text-stone-500 leading-relaxed max-w-md text-lg font-medium">
              We provide herbal, chemical-less lip balm, hair oil, foot cream, and body lotion formulated after understanding individual skin and hair needs through consultation.
            </p>
          </div>
          <div className="flex items-center gap-8">
            <button 
              onClick={() => setView('products')}
              className="bg-[#ff808b] hover:bg-[#ff6b78] text-white rounded-full px-12 py-5 font-bold tracking-wide transition-all shadow-xl shadow-rose-400/25 hover:scale-105 active:scale-95"
            >
              EXPLORE PRODUCTS
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative w-full max-w-lg lg:max-w-none flex justify-end">
          <div className="relative w-[90%] aspect-4/5 flex justify-end mr-8">
            {/* Arched Background */}
            <div className="absolute top-0 right-0 w-full h-full bg-[#fdf2f0] rounded-t-full rounded-b-[3rem] z-0 shadow-inner"></div>
            
            {/* Model Image from public/hero.png */}
            <img 
              src="/hero.png" 
              alt="Hero" 
              className="relative z-10 h-[105%] w-full object-contain object-bottom scale-110 -translate-y-[2%]"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

function AboutSection() {
  return (
    <section className="w-full bg-white relative overflow-hidden py-32">
      {/* Background Concentric Circles */}
      <div className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] pointer-events-none opacity-[0.03] z-0">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div 
            key={i} 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-stone-800" 
            style={{ 
              width: `${i * 180}px`, 
              height: `${i * 180}px`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left: Product Image & Badge */}
        <div className="flex-1 relative w-full flex justify-center lg:justify-start">
          {/* Pink Badge */}
          <div className="absolute -top-4 -left-4 lg:-left-8 lg:-top-4 bg-[#ff808b] text-white rounded-[2.5rem] p-8 shadow-2xl z-20 flex flex-col items-center justify-center transform -rotate-6 w-36 h-36">
            <span className="text-5xl font-bold leading-none">7+</span>
            <span className="text-sm font-bold mt-2 tracking-widest uppercase opacity-90">product</span>
          </div>
          
          <div className="relative group">
            <img 
              src="/about.png" 
              alt="Natural Ingredients" 
              className="relative z-10 w-full max-w-2xl object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="flex-1 max-w-2xl text-left">
          <p className="text-[#ff808b] uppercase tracking-[0.2em] text-sm font-bold mb-6">
            ABOUT VARNA NATURALS
          </p>
          <h2 className="text-[#333333] text-3xl lg:text-[3rem] font-bold leading-[1.1] mb-10 tracking-tight">
            Pure & Natural Healthcare Solutions
          </h2>
          
          <div className="space-y-8 text-stone-500 text-lg leading-relaxed mb-12">
            <p className="font-bold text-stone-600">
              Varna Naturals is a wellness-focused brand dedicated to providing safe, natural, and consultation-based healthcare and personal care solutions.
            </p>
          </div>
          
          <div className="flex items-center justify-between gap-8 pt-10 border-t border-stone-100 relative">
            <div className="border-l-4 border-[#ff808b] pl-8 max-w-sm">
              <p className="text-stone-500 text-lg font-medium leading-normal">
                At Varna Naturals, our mission is not just to sell products, but to provide holistic care.
              </p>
            </div>
            <div className="pt-2">
              <p className="font-cursive text-5xl text-stone-800 tracking-wide opacity-90">Varna Naturals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PopularProducts({ onMoreDetails }: { onMoreDetails: (id: string) => void }) {
  const products = [
    {
      name: 'LIB BALM',
      image: '/p1.png',
      id: 'lib-balm'
    },
    {
      name: 'FOOT CREAM',
      image: '/p2.png',
      id: 'foot-cream'
    },
    {
      name: 'HAIR OIL',
      image: '/p3.png',
      id: 'hair-oil'
    },
    {
      name: 'OTHER',
      image: '/logo.png',
      id: 'other'
    }
  ];

  return (
    <section className="w-full relative py-32 bg-white overflow-hidden">
      <img 
        src="/leaf.png" 
        alt="Leaf Decorative" 
        className="absolute -top-12 -left-22 w-64 lg:w-[480px] pointer-events-none z-0 object-contain drop-shadow-sm opacity-90" 
      />
      <img 
        src="/leaf.png" 
        alt="Leaf Decorative" 
        className="absolute -bottom-18 -right-22 w-64 lg:w-[480px] pointer-events-none z-0 object-contain rotate-180 drop-shadow-sm opacity-90" 
      />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16 flex flex-col items-center">
          <p className="text-[#ff808b] uppercase tracking-[0.2em] text-[10px] font-bold mb-2">
            OUR POPULAR
          </p>
          <h2 className="text-[#333333] text-4xl lg:text-5xl font-bold leading-tight mb-4">
            We Provide The Best For Your Skin
          </h2>
          <p className="text-stone-400 max-w-2xl text-base font-medium leading-relaxed opacity-80">
            Our products are formulated based on individual consultation, ensuring that each customer receives solutions tailored to their specific hair and skin needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <div key={idx} className="bg-[#fcfcff] rounded-[2.5rem] p-10 flex flex-col items-center relative shadow-[0_20px_50px_-15px_rgba(0,0,0,0.03)] border border-stone-100 group hover:-translate-y-2 transition-all duration-500 ease-out">
              
              <div className="relative w-full aspect-square mb-10 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-2 bg-white rounded-full scale-90 group-hover:scale-100 transition-transform duration-700 shadow-inner translate-y-2"></div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="relative z-10 w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="text-center w-full space-y-2">
                <h3 className="text-2xl font-bold text-[#333333] tracking-tight">{product.name}</h3>
              </div>

              <button 
                onClick={() => onMoreDetails(product.id)}
                className="mt-10 bg-[#333333] text-white rounded-xl w-full py-4 font-bold tracking-widest text-[10px] uppercase transition-all hover:bg-[#ff808b] shadow-lg shadow-stone-200 active:scale-[0.98]"
              >
                {product.id === 'other' ? 'Seek Consultation' : 'More Details'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}






function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "How soon can I see results with Varna products?",
      answer: "Consistency is key. Most of our customers observe visible improvements in skin texture and hair health within 3 to 4 weeks of regular use, as our formulations work deep into the cells.",
    },
    {
      question: "Are your products safe for children?",
      answer: "Yes, our products are made from 100% natural and herbal ingredients without any harmful chemicals, making them safe for people of all ages including children.",
    },
    {
      question: "How do I book a professional consultation?",
      answer: "You can easily book a consultation through our website's Consultation page or by reaching out to us directly via WhatsApp. Our experts will then guide you based on your specific requirements.",
    }
  ];

  return (
    <section className="w-full relative z-10 py-24 bg-white overflow-hidden">
      {/* Decorative Assets - Top Left Leaf */}
      <img 
        src="/heroSectionTop.png" 
        alt="Decorative Leaf Top" 
        className="absolute -top-10 -left-10 w-[300px] pointer-events-none z-0 opacity-90 transition-transform duration-1000 hover:rotate-3" 
      />
      
      {/* Decorative Assets - Bottom Right Leaf */}
      <img 
        src="/heroSectionTop.png" 
        alt="Decorative Leaf Bottom" 
        className="absolute -bottom-10 -right-10 w-[300px] pointer-events-none z-0 opacity-90 rotate-180 transition-transform duration-1000" 
      />

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left: Content Area */}
        <div className="flex flex-col">
          <p className="text-[#ff808b] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-[#333333] text-4xl lg:text-5xl font-bold leading-tight mb-6 tracking-tight">
            The Most Question We Had
          </h2>
          <p className="text-stone-400 text-base leading-relaxed mb-10 max-w-md font-medium opacity-80">
            Our team works directly with modern hygiene and quality practices to ensure the best results for your wellness.
          </p>

          <div className="space-y-6">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="group cursor-pointer" onClick={() => setOpenIndex(isOpen ? null : idx)}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`transition-colors duration-300 ${isOpen ? 'text-[#ff808b]' : 'text-[#333333] group-hover:text-[#ff808b]'}`}>
                      {isOpen ? 
                        <ArrowDownCircle className="w-6 h-6 stroke-2" /> : 
                        <ArrowUpCircle className="w-6 h-6 stroke-2" />
                      }
                    </div>
                    <h3 className={`text-lg font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-[#ff808b]' : 'text-[#333333] group-hover:text-[#ff808b]'}`}>
                      {faq.question}
                    </h3>
                  </div>
                  {isOpen && faq.answer && (
                    <p className="text-stone-400 text-base leading-relaxed pl-9 max-w-xl animate-fade-in">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Feature Image */}
        <div className="relative flex justify-center lg:justify-end items-center h-[450px]">
          {/* Rectangle background shape with top border radius only */}
          <div className="absolute right-0 bottom-0 w-[90%] h-[90%] bg-[#ffeae6]/70 rounded-t-[45%] rounded-b-none z-0"></div>
          
          {/* Main FAQ ImageCentered inside the shape */}
          <div className="relative z-10 w-full h-[110%] flex items-center justify-center">
            <img 
              src="/faq.png" 
              alt="FAQ" 
              className="h-full w-auto object-contain object-center scale-110 -translate-y-[5%] hover:scale-115 transition-all duration-700"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

function FeedbackSection() {
  const testimonials = [
    {
      name: "Abirami Sethuraman",
      role: "Skin Care Enthusiast",
      image: "public/people.png",
      text: "The Beetroot Lip Balm is amazing! It keeps my lips hydrated throughout the day even in Chennai's heat. Highly recommend!",
      stars: 5
    },
    {
      name: "Karthikeyan P.",
      role: "Athlete",
      image: "public/people2.png",
      text: "The Hair Oil and Foot Cream have become essential parts of my routine. I can really feel the difference of pure herbal ingredients.",
      stars: 5
    },
    {
      name: "Meenakshi Sundaram",
      role: "Graphic Designer",
      image: "public/people3.png",
      text: "Varna Naturals has finally given me a natural alternative that actually works. The consultation was very helpful in choosing the right products.",
      stars: 5
    }
  ];

  return (
    <section className="w-full bg-[#fcfcff] py-24 relative overflow-hidden border-t border-stone-100">
      {/* Decorative Leaves for Feedback Section */}
      <img 
        src="/leaf.png" 
        alt="Decorative Leaf" 
        className="absolute -top-20 -left-20 w-64 opacity-10 pointer-events-none" 
      />
      <img 
        src="/leaf.png" 
        alt="Decorative Leaf" 
        className="absolute -bottom-20 -right-20 w-64 opacity-10 pointer-events-none rotate-180" 
      />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-[#ff808b] text-xs font-bold tracking-[0.4em] uppercase mb-4">Testimonials</p>
          <h2 className="text-[#333333] text-4xl lg:text-5xl font-bold leading-tight tracking-tight">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.02)] border border-stone-50 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-8 border-4 border-rose-50 shadow-inner group-hover:scale-110 transition-transform duration-500">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex gap-1.5 mb-6 text-[#ff808b]">
                {[...Array(t.stars)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
              </div>
              <p className="text-stone-500 italic mb-8 leading-relaxed text-sm">"{t.text}"</p>
              <h4 className="font-bold text-[#333333] text-lg tracking-tight mb-1">{t.name}</h4>
              <p className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em]">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer({ setView }: { setView: (view: 'home' | 'products' | 'consultation') => void }) {
  return (
    <footer className="w-full bg-[#333333] text-white py-16 relative z-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6 cursor-pointer" onClick={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#ff808b] flex items-center justify-center bg-white">
                 <img src="/logo.png" alt="Varna Naturals Logo" className="w-12 h-12 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-3xl text-white leading-none font-bold">Varna Naturals</span>
                <span className="text-[10px] text-stone-400 tracking-widest uppercase mt-1">Natural Care for Skin, Hair & Wellness</span>
              </div>
            </div>
            <p className="text-stone-300 leading-relaxed text-sm">
              Varna Naturals is a wellness-focused natural skincare initiative dedicated to providing safe, effective, and chemical less personal care products.
            </p>
          </div>

          {/* Column 2: Quick Link */}
          <div className="flex flex-col">
            <h4 className="text-2xl font-bold mb-6 tracking-tight">Quick Link</h4>
            <ul className="space-y-4">
              <li onClick={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2 text-stone-300 hover:text-[#ff808b] cursor-pointer transition-colors">
                <Check size={16} className="text-[#ff808b]" />
                <span>About</span>
              </li>
              <li onClick={() => { setView('products'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2 text-stone-300 hover:text-[#ff808b] cursor-pointer transition-colors">
                <Check size={16} className="text-[#ff808b]" />
                <span>Product</span>
              </li>
              <li onClick={() => { setView('consultation'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2 text-stone-300 hover:text-[#ff808b] cursor-pointer transition-colors">
                <Check size={16} className="text-[#ff808b]" />
                <span>Consultation</span>
              </li>
            </ul>
          </div>

          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Column 4: Get In Touch */}
          <div className="flex flex-col">
            <h4 className="text-2xl font-bold mb-6 tracking-tight">Get In Touch</h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-stone-300">
                <Phone size={20} className="text-[#ff808b] shrink-0" />
                <span>9345033110 (WhatsApp)</span>
              </li>
              <li className="flex items-center gap-3 text-stone-300">
                <Mail size={20} className="text-[#ff808b] shrink-0" />
                <span>dr._abinayasri (Instagram)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Empty to remove text */}
        <div className="pt-8 border-t border-stone-800"></div>
      </div>
    </footer>
  );
}

interface ProductShowcaseProps {
  id: string;
  productName: string;
  title: string;
  description: string;
  image: string;
  categories: string[];
  rightContent: {
    heading: string;
    secondaryTitle: string;
    secondaryText: string;
  };
}

function ProductShowcase({ id, productName, title, description, image, categories, rightContent }: ProductShowcaseProps) {
  return (
    <section id={id} className="w-full h-full snap-start bg-[#f9f8f4] py-4 lg:py-6 relative overflow-hidden border-b border-stone-200/50 flex items-center">
      {/* Background Grid Lines - More subtle */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ 
        backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
        backgroundSize: '100px 100px'
      }}></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
        
        {/* Left Column - More compact */}
        <div className="lg:col-span-4 flex flex-col justify-center gap-6 lg:gap-8">

          <div className="space-y-4 lg:space-y-6">
            <h2 className="text-stone-900 text-3xl lg:text-5xl xl:text-6xl font-serif font-bold leading-tight tracking-tight">
              {title}
            </h2>
            <p className="text-stone-500 text-sm lg:text-base font-medium leading-relaxed max-w-sm">
              {description}
            </p>
            <button 
              onClick={() => {
                const message = `Hello Varna Naturals, I would like to order ${productName}.`;
                window.open(`https://wa.me/9345033110?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="bg-[#1a1a1a] text-white px-10 py-4 rounded-full font-bold tracking-wide hover:bg-black transition-all shadow-xl shadow-stone-200 active:scale-95 text-xs"
            >
              Order now
            </button>
          </div>

          <div className="space-y-3 pb-8 lg:pb-0">
            <p className="text-[9px] font-bold text-stone-400 uppercase tracking-[0.2em]">
              Category
            </p>
            <div className="flex flex-wrap gap-1.5 max-w-[280px]">
              {categories.map((cat) => (
                <span key={cat} className="bg-white border border-stone-100 text-stone-600 text-[9px] font-bold px-3 py-1.5 rounded-full hover:bg-stone-50 transition-colors shadow-sm whitespace-nowrap">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Center Column - Constrained height */}
        <div className="lg:col-span-4 relative flex justify-center items-center h-full min-h-[300px] lg:min-h-auto">
           <div className="relative w-full max-h-[50vh] lg:max-h-[60vh] flex items-center justify-center">

              <img 
                src={image} 
                alt="Product" 
                className="max-w-full max-h-full object-contain drop-shadow-[15px_30px_50px_rgba(0,0,0,0.12)] z-10 lg:-rotate-2 hover:rotate-0 transition-transform duration-1000"
              />
           </div>
        </div>

        {/* Right Column - Reorganized for vertical space efficiency */}
        <div className="lg:col-span-4 flex flex-col justify-center gap-8 lg:gap-12 h-full">
          <div className="space-y-3 lg:space-y-4">
            <p className="text-stone-600 text-sm lg:text-base font-medium leading-relaxed italic border-l-2 border-rose-200 pl-4">
              {rightContent.heading}
            </p>
            
            <div className="flex items-center gap-3">
              <div className="flex -space-x-1.5">
                {["/doctor1.png", "/doctor2.png", "/doctor3.png"].map((src, i) => (
                  <img 
                    key={i} 
                    src={src} 
                    className="w-8 h-8 rounded-full border-2 border-white shadow-sm object-cover" 
                    alt="Expert" 
                  />
                ))}
              </div>
              <a href="#" className="text-[10px] font-bold text-stone-800 border-b border-stone-800 pb-0.5 hover:text-[#ff808b] hover:border-[#ff808b] transition-all uppercase tracking-wider">
                Expert Advice
              </a>
            </div>
          </div>

          <div className="relative p-6 pt-12 lg:p-8 lg:pt-16 bg-white rounded-3xl border border-stone-50 shadow-[0_15px_35px_rgba(0,0,0,0.02)] overflow-visible">
             <div className="space-y-3 relative z-10">
                <div className="w-24 h-24 lg:w-28 lg:h-28 flex items-center justify-center absolute -top-12 lg:-top-16 -right-6 lg:-right-8">
                   <img src={image} className="w-full h-full object-contain drop-shadow-lg opacity-90 scale-125" alt="Sub Product" />
                </div>
                <h4 className="text-xl lg:text-2xl font-bold text-stone-800 tracking-tight pr-16 lg:pr-20">
                   {rightContent.secondaryTitle}
                </h4>
                <p className="text-stone-400 text-xs lg:text-sm font-medium leading-relaxed pr-10 lg:pr-12">
                   {rightContent.secondaryText}
                </p>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function ConsultationView({ setView }: { setView: (view: 'home' | 'products' | 'consultation') => void }) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name');
    const product = formData.get('product');
    const userMessage = formData.get('message');
    
    let message = `Hello Varna Naturals, I am ${name}. I am interested in ${product}.`;
    if (userMessage) {
      message += ` Additional details: ${userMessage}`;
    }
    message += ` I would like a consultation.`;
    
    const whatsappUrl = `https://wa.me/9345033110?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="h-[calc(100vh-80px)] overflow-y-auto snap-y snap-mandatory scroll-smooth hide-scrollbar transition-all bg-[#fdfdfd]">
      
      {/* Hero Sections Wrapper */}
      <div className="h-full flex flex-col lg:flex-row snap-start">
        {/* Skin Consultation Section */}
        <div className="flex-1 relative group cursor-pointer overflow-hidden flex flex-col items-center justify-center p-12 text-center border-r border-stone-100">
          <div className="absolute inset-0 bg-rose-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          {/* Decorative background image - blurred -> Clear on hover */}
          <div className="absolute inset-0 z-0 transition-all duration-1000 grayscale group-hover:grayscale-0 opacity-5 group-hover:opacity-20 group-hover:scale-110">
            <img src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Skin Care Background" />
          </div>

          <div className="relative z-10 space-y-6">
            <div className="w-24 h-24 bg-white rounded-full mx-auto shadow-2xl shadow-rose-200/50 overflow-hidden mb-8 border-4 border-white group-hover:scale-110 transition-transform duration-500">
               <img src="/doctor1.png" className="w-full h-full object-cover" alt="Doctor 1" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#333333]">Skin Consultation</h2>
            <p className="text-stone-500 max-w-sm mx-auto font-medium leading-relaxed">
              Personalized analysis of your skin concerns including acne, aging, and hydration needs.
            </p>
            <a 
              href="https://wa.me/9345033110?text=Hello%20Varna%20Naturals,%20I%20would%20like%20to%20book%20a%20Skin%20Consultation" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#ff808b] text-white px-10 py-5 rounded-2xl font-bold tracking-wide hover:bg-[#ff6b78] hover:scale-105 transition-all shadow-xl shadow-rose-400/20 active:scale-95"
            >
              BOOK VIA WHATSAPP
            </a>
          </div>
        </div>

        {/* Hair Consultation Section */}
        <div className="flex-1 relative group cursor-pointer overflow-hidden flex flex-col items-center justify-center p-12 text-center">
          <div className="absolute inset-0 bg-stone-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          {/* Decorative background image - blurred -> Clear on hover */}
          <div className="absolute inset-0 z-0 transition-all duration-1000 grayscale group-hover:grayscale-0 opacity-5 group-hover:opacity-20 group-hover:scale-110">
            <img src="https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Hair Care Background" />
          </div>

          <div className="relative z-10 space-y-6">
            <div className="w-24 h-24 bg-white rounded-full mx-auto shadow-2xl shadow-stone-200/50 overflow-hidden mb-8 border-4 border-white group-hover:scale-110 transition-transform duration-500">
               <img src="/doctor2.png" className="w-full h-full object-cover" alt="Doctor 2" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#333333]">Hair Consultation</h2>
            <p className="text-stone-500 max-w-sm mx-auto font-medium leading-relaxed">
              Expert guidance for hair fall, scalp health, and choosing the right natural oil blend.
            </p>
            <a 
              href="https://wa.me/9345033110?text=Hello%20Varna%20Naturals,%20I%20would%20like%20to%20book%20a%20Hair%20Consultation" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#333333] text-white px-10 py-5 rounded-2xl font-bold tracking-wide hover:bg-black hover:scale-105 transition-all shadow-xl shadow-stone-400/20 active:scale-95"
            >
              BOOK VIA WHATSAPP
            </a>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div id="consultation-form" className="snap-start py-24 bg-white relative">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-serif font-bold text-stone-900 mb-4">Request a Personalized Plan</h3>
            <p className="text-stone-500 font-medium">Fill in your details and our experts will reach out to you.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 bg-[#fdfdfd] p-8 lg:p-14 rounded-[3rem] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.08)] border border-stone-100 relative group overflow-hidden">
            {/* Subtle decorative background element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50/50 rounded-bl-full pointer-events-none opacity-50"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] ml-1">Your Name</label>
                <input required name="name" type="text" placeholder="e.g. Aditi Sharma" className="w-full bg-white border border-stone-100 px-6 py-4.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-100/50 focus:border-rose-300 transition-all text-stone-700 font-medium placeholder:text-stone-300 shadow-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] ml-1">Product Interested</label>
                <select required name="product" className="w-full bg-white border border-stone-100 px-6 py-4.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-100/50 focus:border-rose-300 transition-all text-stone-700 font-medium appearance-none shadow-sm cursor-pointer">
                  <option value="">Select a product</option>
                  <option value="Beetroot Lip Balm">Beetroot Lip Balm</option>
                  <option value="Herbal Hair Oil">Herbal Hair Oil</option>
                  <option value="Softening Foot Cream">Softening Foot Cream</option>
                  <option value="Other / General Consultation">Other / General Consultation</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] ml-1">Message (Optional)</label>
              <textarea 
                name="message" 
                rows={4} 
                placeholder="Tell us more about your skin or hair concerns..." 
                className="w-full bg-white border border-stone-100 px-6 py-4.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-100/50 focus:border-rose-300 transition-all text-stone-700 font-medium placeholder:text-stone-300 shadow-sm resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-stone-900 text-white py-6 rounded-2xl font-bold tracking-widest text-xs uppercase hover:bg-black transition-all shadow-xl shadow-stone-200 active:scale-[0.98] flex items-center justify-center gap-4 group"
            >
              SEND REQUEST ON WHATSAPP
              <ArrowDownCircle className="w-5 h-5 -rotate-90 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>

      <div className="snap-start">
        <Footer setView={setView} />
      </div>
    </div>
  );
}
