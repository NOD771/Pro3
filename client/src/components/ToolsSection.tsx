const tools = [
  {
    id: 1,
    name: "BG Remover",
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
    name: "Sketch",
    description: "Transform photos to sketches",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
      </svg>
    )
  },
  {
    id: 4,
    name: "Upscaler",
    description: "Enhance image resolution",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
        <path d="M18.37 3.63a2.12 2.12 0 0 1 3 3L12 16l-4 1 1-4Z"/>
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
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 12h8"/>
        <path d="M12 8v8"/>
      </svg>
    )
  }
];

const ToolsSection = () => {
  return (
    <section id="tools" className="py-16 bg-primary/5" data-testid="tools-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6"></div>

        <div className="flex flex-nowrap gap-1 overflow-x-auto">
          {tools.map((tool) => (
            <div 
              key={tool.id}
              className="flex-shrink-0 basis-1/4 sm:basis-1/5 md:basis-1/6 lg:basis-[12.5%] pr-1"
              data-testid={`tool-card-${tool.id}`}
            >
              <div className="group relative cursor-pointer h-full">
                {/* Outer Container with Gradient Border */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-[hsla(253,100%,72%,0.2)] to-transparent group-hover:from-[hsla(253,100%,72%,0.4)] transition-all duration-100"
                  style={{ borderRadius: '0.75rem' }}
                ></div>
                
                {/* Inner Container */}
                <div 
                  className="relative p-2 text-center space-y-1 h-full flex flex-col items-center justify-center transform group-hover:-translate-y-0.5 transition-all duration-100 m-0.5"
                  style={{ 
                    borderRadius: '0.5rem',
                    backgroundColor: 'hsl(240, 10%, 7%)',
                    background: 'linear-gradient(135deg, hsl(240, 10%, 8%) 0%, hsl(240, 10%, 6%) 100%)'
                  }}
                >
                  {/* Shiny overlay */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-100"
                    style={{ borderRadius: '0.5rem' }}
                  ></div>
                  
                  {/* Icon Background (Circle) */}
                  <div 
                    className="relative bg-primary/10 p-1.5 rounded-full group-hover:bg-primary/15 transition-all duration-100"
                    style={{
                      background: 'radial-gradient(circle at 30% 30%, hsla(253, 100%, 72%, 0.15), hsla(253, 100%, 72%, 0.08))',
                      boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <div className="h-4 w-4 text-primary">
                      {tool.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-[10px] font-semibold text-foreground whitespace-nowrap relative z-10" data-testid={`tool-name-${tool.id}`}>
                    {tool.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
