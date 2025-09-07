import { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    title: "AI Text-to-Image Generator",
    description: "Transform your ideas into stunning visuals. Describe what you want to see, and let our AI bring it to life in seconds.",
    buttonText: "Start Creating",
    image: "https://images.unsplash.com/photo-1547954575-855750c57bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080",
    alt: "AI Text-to-Image Generator Interface"
  },
  {
    id: 2,
    title: "Background Remover",
    description: "Remove backgrounds from any image instantly with AI precision. Perfect for product photos, portraits, and more.",
    buttonText: "Remove Background",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080",
    alt: "Background Remover Tool Interface"
  },
  {
    id: 3,
    title: "AI Image Upscaler",
    description: "Enhance image quality and resolution up to 4x with advanced AI algorithms. Restore details and clarity effortlessly.",
    buttonText: "Upscale Image",
    image: "https://pixabay.com/get/g5955406de0568825945ced8402e8a29a3b8524b6df980719501961c76e09f8dfe97c9dbf1c9448244461750bc2b1ca71bbaf1098c60f68fac8e90f140de9b5d9_1280.jpg",
    alt: "AI Image Upscaler Technology"
  },
  {
    id: 4,
    title: "Image-to-Sketch Converter",
    description: "Transform photos into beautiful pencil sketches and artistic drawings. Create stunning artwork from any image.",
    buttonText: "Create Sketch",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080",
    alt: "Image to Sketch Conversion Art"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full overflow-hidden" data-testid="hero-slider">
      <div className="slider-container flex w-full">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="slider-slide w-full flex-none">
              <div className="aspect-[3/1] md:aspect-[5/1] w-full relative">
                <img 
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                  data-testid={`slide-image-${index}`}
                />
                <div className="absolute inset-0 bg-hero-overlay"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center p-4">
                  <div className="max-w-3xl animate-slide-in">
                    <h1 className="text-2xl md:text-4xl font-bold font-headline text-white mb-3 drop-shadow-lg" data-testid={`slide-title-${index}`}>
                      {slide.title}
                    </h1>
                    <p className="text-sm md:text-lg text-gray-200 drop-shadow-md max-w-xl mx-auto" data-testid={`slide-description-${index}`}>
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 hover:bg-primary border border-white/15 rounded-full flex items-center justify-center text-white transition-all duration-300 z-10"
        data-testid="button-prev-slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 hover:bg-primary border border-white/15 rounded-full flex items-center justify-center text-white transition-all duration-300 z-10"
        data-testid="button-next-slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button 
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-primary' : 'bg-white/30 hover:bg-primary'
            }`}
            data-testid={`slide-dot-${index}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
