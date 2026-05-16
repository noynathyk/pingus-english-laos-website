import { motion } from 'motion/react';
import { memo } from 'react';

const StudentsSection = memo(function StudentsSection({ t }: { t: any }) {
  return (
    <section id="students" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl text-pingu-purple mb-6">{t.students.title}</h2>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto">{t.students.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.students.gallery.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[3rem] aspect-square bg-gray-100 shadow-2xl"
            >
              <img
                src={item.img}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt={item.title}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pingu-purple/90 via-pingu-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <h3 className="text-white font-bold text-3xl mb-2">{item.title}</h3>
                <p className="text-white/80 text-lg leading-tight">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default StudentsSection;
