import { motion } from 'motion/react';
import { Mail, Linkedin } from 'lucide-react';

// ─── Obfuscated credentials (Base64) ─────────────────────────────────────────
// Decoded only at runtime in the browser — never exposed as plain text in source
const _e = atob('a3Jpc2huYWt1bWF3YXRheXVzaEBnbWFpbC5jb20='); // email
const _w = atob('aHR0cHM6Ly93YS5tZS85MTYzNzY3MTQwMDI=');       // whatsapp
const _l = atob('aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2tyaXNobmEta3VtYXdhdC1hMDY1YjIyOTE='); // linkedin
// ─────────────────────────────────────────────────────────────────────────────

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="currentColor"
    >
      <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.738 5.488 2.027 7.8L0 32l8.418-2.004A15.929 15.929 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.75-1.833l-.484-.287-5.003 1.191 1.212-4.868-.315-.5A13.262 13.262 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667c7.364 0 13.333 5.969 13.333 13.333 0 7.364-5.969 13.333-13.333 13.333z" />
      <path d="M23.2 19.467c-.378-.19-2.237-1.103-2.583-1.23-.346-.126-.598-.189-.85.19-.251.378-.975 1.23-1.195 1.481-.22.252-.44.283-.818.095-.378-.19-1.597-.589-3.042-1.877-1.124-1.003-1.882-2.241-2.102-2.619-.22-.378-.024-.582.165-.77.17-.168.378-.44.567-.66.189-.22.252-.378.378-.63.126-.252.063-.472-.032-.662-.094-.19-.85-2.05-1.164-2.808-.307-.736-.619-.637-.85-.648l-.724-.013c-.252 0-.661.095-1.007.473-.346.378-1.323 1.292-1.323 3.152s1.354 3.656 1.543 3.908c.19.252 2.666 4.07 6.457 5.708.902.39 1.606.623 2.155.795.906.288 1.73.248 2.381.15.727-.108 2.237-.915 2.552-1.798.315-.882.315-1.638.22-1.796-.094-.157-.346-.252-.724-.44z" />
    </svg>
  );
}

export function Contact() {
  const socials = [
    { icon: Linkedin,     href: _l },
    { icon: WhatsAppIcon, href: _w },
    { icon: Mail,         href: `mailto:${_e}` },
  ];

  return (
    <section className="py-32 px-8 md:px-24 bg-black relative overflow-hidden" id="contact">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <h2 className="font-['Orbitron'] text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Create</span><br/> Together.
          </h2>
          <p className="font-['Syne'] text-white/60 text-lg mb-10 max-w-xl">
            Whether it's a 3D interface, a brand identity, or a complete digital overhaul, I'm ready to bring your vision to life.
          </p>

          <div className="flex gap-6">
            {socials.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-violet-600/20 hover:border-violet-500/50 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
