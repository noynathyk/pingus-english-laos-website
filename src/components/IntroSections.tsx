import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { memo } from 'react';

const IntroSections = memo(function IntroSections({ t }: { t: any }) {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {t.introSections.map((section: any, i: number) => (
          <div
            key={i}
            className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
          >
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex-1 space-y-8"
            >
              <h2 className="text-5xl lg:text-7xl text-pingu-purple leading-none">{section.title}</h2>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                {section.desc}
              </p>
              <a
                href={section.link}
                className="inline-flex items-center gap-2 bg-pingu-blue text-white px-8 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform"
              >
                {section.cta} <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex-1 w-full"
            >
              <div className="aspect-[4/3] rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-pingu-bg">
                <img
                  src={section.img}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  alt={section.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default IntroSections;
