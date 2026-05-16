import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import { memo } from 'react';

const ContactSection = memo(function ContactSection({ t }: { t: any }) {
  return (
    <section id="contact" className="py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-6xl lg:text-8xl text-pingu-purple mb-12 italic leading-none">{t.contact.title}</h2>
            <div className="space-y-10">
              <div className="flex gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-pingu-bg flex items-center justify-center text-pingu-blue group-hover:bg-pingu-blue group-hover:text-white transition-all" aria-hidden="true">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-slate-400 mb-2 tracking-widest">Address</p>
                  <p className="text-2xl font-display text-slate-700">{t.contact.address}</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-pingu-bg flex items-center justify-center text-pingu-blue group-hover:bg-pingu-blue group-hover:text-white transition-all" aria-hidden="true">
                  <Phone className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-slate-400 mb-2 tracking-widest">Call Us</p>
                  <a href={`tel:${t.contact.phone.replace(/\s+/g, '')}`} className="text-2xl font-display text-slate-700 hover:text-pingu-purple transition-colors">{t.contact.phone}</a>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-pingu-bg flex items-center justify-center text-pingu-blue group-hover:bg-pingu-blue group-hover:text-white transition-all" aria-hidden="true">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-slate-400 mb-2 tracking-widest">Email</p>
                  <a href={`mailto:${t.contact.email}`} className="text-xl font-display text-slate-700 hover:text-pingu-purple transition-colors">{t.contact.email}</a>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a
                href="https://www.facebook.com/pingusenglishlaos"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-14 h-14 rounded-2xl bg-pingu-blue text-white flex items-center justify-center hover:-translate-y-2 transition-transform shadow-lg shadow-pingu-blue/30"
              >
                <Facebook aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/pingusenglish.laos?igsh=MXJ6cjM0ZHcyNW8ycQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500 text-white flex items-center justify-center hover:-translate-y-2 transition-transform shadow-lg"
              >
                <Instagram aria-hidden="true" />
              </a>
              <a
                href="https://www.youtube.com/@pingusenglishlaos?si=o-M2m7-H-Ad_sD03"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center hover:-translate-y-2 transition-transform shadow-lg shadow-red-500/30"
              >
                <Youtube aria-hidden="true" />
              </a>
              <a
                href={t.footer.tiktok || "https://www.tiktok.com/@pingulaos"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center hover:-translate-y-2 transition-transform shadow-lg shadow-black/30"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8" aria-hidden="true">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.36-.54.38-.89.98-1.03 1.64-.17.47-.12.99.11 1.43.35.5.9.87 1.5.97 1.24.21 2.51-.5 2.97-1.67.12-.33.16-.7.16-1.06V.02z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="bg-pingu-bg p-8 lg:p-12 rounded-[5rem] border-4 border-white shadow-2xl relative min-h-[500px] flex flex-col overflow-hidden">
            <div className="absolute -top-6 -right-6 w-32 h-32 lg:w-48 lg:h-48 bg-white rounded-full flex items-center justify-center p-3 overflow-hidden border-4 border-pingu-bg shadow-2xl z-20">
              <img 
                src="./pingu-images/pingu-logo-1.webp" 
                alt="Logo" 
                className="w-full h-full object-contain" 
                loading="lazy"
              />
            </div>
            <h4 className="text-3xl text-pingu-purple mb-6 italic z-10">{t.contact.mapTitle}</h4>
            <div className="flex-1 rounded-[3rem] overflow-hidden shadow-inner relative group border-4 border-white/50 bg-white/50">
              <iframe
                title="Pingu's English School Location"
                src="https://maps.google.com/maps?q=Pingu's%20English%20School%20Laos&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full grayscale-[0.2] contrast-[1.1] group-hover:grayscale-0 transition-all duration-700"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-6 right-6 z-10">
                <a
                  href="https://maps.app.goo.gl/cM7k2MXgQQWHg5FK8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pingu-purple text-white px-8 py-4 rounded-2xl font-black text-sm shadow-2xl hover:scale-105 transition-transform uppercase tracking-widest flex items-center gap-3 ring-4 ring-white"
                >
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  {t.contact.direction}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;
