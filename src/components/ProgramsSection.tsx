import { motion } from 'motion/react';
import { memo } from 'react';

const ProgramsSection = memo(function ProgramsSection({ t }: { t: any }) {
  return (
    <section id="programs" className="py-24 bg-pingu-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl text-pingu-purple mb-6">{t.programs.title}</h2>
          <p className="max-w-2xl mx-auto text-xl text-slate-500 font-bold">{t.programs.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {t.programs.levels.map((level: any, i: number) => (
            <div key={i} className="bg-white rounded-[3rem] p-4 shadow-sm hover:shadow-2xl transition-all group">
              <div className="aspect-square rounded-[2.5rem] overflow-hidden mb-8 bg-pingu-bg">
                <img
                  src={`./pingu-images/pingu-lvl-${i + 1}.webp`}
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                  alt={level.name}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="px-6 pb-6 text-center">
                <span className="inline-block px-4 py-1.5 rounded-full bg-pingu-purple/10 text-pingu-purple font-black text-xs uppercase mb-4 tracking-widest leading-none">
                  {level.badge}
                </span>
                <h4 className="text-2xl text-slate-800 mb-2 truncate leading-none">{level.name}</h4>
                <p className="text-pingu-blue font-black text-xs uppercase tracking-tighter">{level.stat}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Activities List */}
        <div className="space-y-6">
          <h3 className="text-4xl text-center text-pingu-purple mb-16">{t.programs.activitiesTitle}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.programs.activities.map((act: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={act.img}
                    alt={act.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-6 left-6 bg-pingu-blue text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-xl" aria-hidden="true">
                    {act.num}
                  </div>
                </div>
                <div className="p-10">
                  <h4 className="text-2xl text-pingu-purple mb-4 leading-none">{act.title}</h4>
                  <p className="text-slate-500 leading-relaxed font-medium text-sm">
                    {act.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default ProgramsSection;
