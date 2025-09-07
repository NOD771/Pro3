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
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground mb-4" data-testid="tools-title">
            AI-Powered Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="tools-description">
            Explore our comprehensive suite of AI tools designed to enhance your creative workflow
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 animate-slide-in">
          {tools.map((tool) => (
            <div 
              key={tool.id}
              className="group bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 cursor-pointer"
              data-testid={`tool-card-${tool.id}`}
            >
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                {tool.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors" data-testid={`tool-name-${tool.id}`}>
                {tool.name}
              </h3>
              <p className="text-sm text-muted-foreground" data-testid={`tool-description-${tool.id}`}>
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
