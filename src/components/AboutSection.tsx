import { Bird, Quote } from 'lucide-react';
import { memo } from 'react';

const AboutSection = memo(function AboutSection({ t }: { t: any }) {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
          <div className="space-y-12">
            <div className="border-l-8 border-pingu-purple pl-8">
              <h3 className="text-4xl text-pingu-purple mb-6">{t.about.historyTitle}</h3>
              <p className="text-lg leading-relaxed text-slate-600 font-medium">{t.about.historyText}</p>
            </div>
            <div className="border-l-8 border-pingu-blue pl-8">
              <h3 className="text-4xl text-pingu-blue mb-6">{t.about.schoolTitle}</h3>
              <p className="text-lg leading-relaxed text-slate-600 font-medium">{t.about.schoolText}</p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-pingu-bg">
              <img 
                src="./pingu-images/pingu-banner-1.webp" 
                className="w-full h-full object-cover" 
                alt="School Life" 
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white rounded-full flex items-center justify-center p-6 shadow-xl border-4 border-pingu-purple animate-float">
              <Bird className="w-full h-full text-pingu-purple" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* CEO Message Row */}
        <div className="bg-pingu-purple text-white rounded-[4rem] overflow-hidden grid lg:grid-cols-2 min-h-[600px]">
          <div className="p-12 lg:p-20 flex flex-col justify-center order-2 lg:order-1">
            <Quote className="w-16 h-16 text-pingu-blue-light mb-8 opacity-50" aria-hidden="true" />
            <h3 className="text-4xl lg:text-5xl mb-8 italic">{t.about.directorTitle}</h3>
            <p className="text-xl leading-relaxed font-semibold opacity-90">"{t.about.directorMessage}"</p>
          </div>
          <div className="relative order-1 lg:order-2 min-h-[400px]">
            <img
              src="./pingu-images/ping-ceo-message.webp"
              className="absolute inset-0 w-full h-full object-cover"
              alt={t.about.directorName || "Director"}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
