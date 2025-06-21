
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Building2 } from 'lucide-react';

interface ExpertiseSectionProps {
  section: {
    title?: string;
    subtitle?: string;
    description?: string;
    sectors?: Array<{
      id: string;
      name: string;
      description: string;
      image: string;
      applications: string[];
    }>;
  };
}

const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ section }) => {
  const [hoveredSector, setHoveredSector] = useState<string | null>(null);

  if (!section?.sectors?.length) {
    console.warn('ExpertiseSection: No sectors provided');
    return null;
  }

  const title = section.title || 'Our Expertise';
  const subtitle = section.subtitle || 'Industries we serve';
  const description = section.description || 'We provide specialized solutions across various industries.';

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            {subtitle}
          </p>
          <p className="text-lg text-gray-500 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {section.sectors.map((sector, index) => (
            <Card
              key={sector.id}
              className="group overflow-hidden bg-white/80 backdrop-blur-sm border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fade-in 0.6s ease-out forwards'
              }}
              onMouseEnter={() => setHoveredSector(sector.id)}
              onMouseLeave={() => setHoveredSector(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={sector.image}
                  alt={sector.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-amber-300 transition-colors">
                    {sector.name}
                  </h3>
                </div>
                <div className="absolute top-4 right-4">
                  <Building2 className="w-6 h-6 text-white/80 group-hover:text-amber-300 transition-colors" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {sector.description}
                </p>
                
                {/* Applications */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">Applications</span>
                    <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                      hoveredSector === sector.id ? 'rotate-90 text-blue-600' : ''
                    }`} />
                  </div>
                  
                  <div className={`space-y-2 transition-all duration-300 ${
                    hoveredSector === sector.id ? 'max-h-96 opacity-100' : 'max-h-20 opacity-70'
                  } overflow-hidden`}>
                    {sector.applications?.slice(0, hoveredSector === sector.id ? sector.applications.length : 3).map((app, appIndex) => (
                      <Badge 
                        key={appIndex} 
                        variant="secondary" 
                        className="text-xs mr-2 mb-1 bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                      >
                        {app}
                      </Badge>
                    ))}
                    {!hoveredSector && sector.applications?.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{sector.applications.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.2) 1px, transparent 0);
          background-size: 30px 30px;
        }
      `}</style>
    </section>
  );
};

export default ExpertiseSection;
