const tools = [
  {
    id: 1,
    name: "Background Remover",
    description: "Remove backgrounds instantly",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
        <circle cx="9" cy="9" r="2"/>
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
      </svg>
    )
  },
  {
    id: 2,
    name: "Text-to-Image",
    description: "Generate images from text",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
        <path d="m15 5 4 4"/>
      </svg>
    )
  },
  {
    id: 3,
    name: "Sketch Converter",
    description: "Transform photos to sketches",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="m17 3 4 4-6 6-4-4 6-6z"/>
        <path d="m13 7 6 6"/>
        <path d="M9 12 5 8l-2 2 4 4 2-2z"/>
      </svg>
    )
  },
  {
    id: 4,
    name: "Image Upscaler",
    description: "Enhance image resolution",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M21 15V6"/>
        <path d="M21 21H3"/>
        <path d="m3 6 6 6"/>
        <path d="m9 12 6-6"/>
        <path d="M12 3h9v9"/>
      </svg>
    )
  },
  {
    id: 5,
    name: "Image-to-Image",
    description: "Transform existing images",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="m3 11 4-4 4 4"/>
        <path d="m21 13-4 4-4-4"/>
        <path d="M7 11V7a2 2 0 0 1 2-2h2"/>
        <path d="M17 13v4a2 2 0 0 1-2 2h-2"/>
      </svg>
    )
  },
  {
    id: 6,
    name: "More Tools",
    description: "Discover additional features",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="1"/>
        <circle cx="19" cy="12" r="1"/>
        <circle cx="5" cy="12" r="1"/>
      </svg>
    )
  }
];

const ToolsSection = () => {
  return (
    <section id="tools" className="py-16 bg-primary/5" data-testid="tools-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6"></div>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 pb-4 animate-slide-in" style={{ width: 'max-content' }}>
            {tools.map((tool) => (
              <div 
                key={tool.id}
                className="group relative cursor-pointer flex-shrink-0 w-20 h-20"
                data-testid={`tool-card-${tool.id}`}
              >
                {/* Outer Container with Gradient Border */}
                <div 
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-[hsla(253,100%,72%,0.2)] to-transparent group-hover:from-[hsla(253,100%,72%,0.4)] transition-all duration-300"
                  style={{ borderRadius: '0.75rem' }}
                ></div>
                
                {/* Inner Container */}
                <div 
                  className="relative border border-border/10 flex flex-col items-center justify-center h-full m-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  style={{ 
                    borderRadius: '0.5rem',
                    backgroundColor: 'hsl(240, 10%, 7%)'
                  }}
                >
                  {/* Icon Background (Circle) */}
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-1 transition-all duration-300"
                    style={{ 
                      backgroundColor: 'hsla(253, 100%, 72%, 0.1)'
                    }}
                  >
                    <div className="scale-75" style={{ color: 'hsl(253, 100%, 72%)' }}>
                      {tool.icon}
                    </div>
                  </div>
                  <h3 
                    className="font-bold transition-colors text-[9px] text-center leading-tight px-1" 
                    style={{ color: 'hsl(240, 5%, 90%)' }}
                    data-testid={`tool-name-${tool.id}`}
                  >
                    {tool.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
