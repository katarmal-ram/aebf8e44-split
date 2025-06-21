
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

interface TestimonialsSectionProps {
  section: {
    title?: string;
    subtitle?: string;
    items?: Array<{
      id: string;
      name: string;
      company: string;
      designation: string;
      content: string;
      rating: number;
      image: string;
    }>;
  };
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ section }) => {
  if (!section?.items?.length) {
    console.warn('TestimonialsSection: No items provided');
    return null;
  }

  const title = section.title || 'What Our Clients Say';
  const subtitle = section.subtitle || 'Trusted partnerships built on quality and reliability';

  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {section.items.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="group p-8 bg-white/80 backdrop-blur-sm border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden"
              style={{
                animationDelay: `${index * 200}ms`,
                animation: 'fade-in 0.6s ease-out forwards'
              }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-blue-600" />
              </div>
              
              <CardContent className="p-0 relative z-10">
                <div className="flex flex-col space-y-6">
                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 text-amber-400 fill-current group-hover:scale-110 transition-transform"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-gray-700 text-lg leading-relaxed italic font-medium group-hover:text-gray-800 transition-colors">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-amber-500/20 group-hover:opacity-100 opacity-0 transition-opacity" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 text-lg group-hover:text-blue-700 transition-colors">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 group-hover:text-gray-600 transition-colors">
                        {testimonial.designation}
                      </p>
                      <p className="text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
                        {testimonial.company}
                      </p>
                    </div>
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
          background-size: 25px 25px;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
