
import React from 'react';
import SafeIcon from '@/components/ui/safe-icon';

interface WhyChooseUsProps {
  config: any;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ config }) => {
  if (!config) return null;

  const { whyChooseUs } = config;
  const items = whyChooseUs?.items || whyChooseUs?.reasons || [];

  if (!items || items.length === 0) {
    console.warn('WhyChooseUs: No items provided');
    return null;
  }

  const title = whyChooseUs?.title || 'Why Choose Us';
  const subtitle = whyChooseUs?.subtitle || 'Excellence in everything we do';

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((reason: any, index: number) => (
            <div
              key={reason.id || index}
              className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20"
              style={{
                animationDelay: `${index * 200}ms`,
                animation: 'fade-in 0.6s ease-out forwards'
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-amber-200 group-hover:to-amber-300 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <SafeIcon 
                  name={reason.icon || 'star'} 
                  className="w-8 h-8 text-amber-600 group-hover:text-amber-700 transition-colors" 
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-blue-700 transition-colors">
                {reason.title || 'Service Title'}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                {reason.description || 'Service description goes here.'}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
