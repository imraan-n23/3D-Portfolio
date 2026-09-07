import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-copy">
        <motion.p className="kicker" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }}>DATA ANALYTICS PORTFOLIO</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
          SOUND<br />SHOULD<br />SURROUND<br /><span>YOU.</span>
        </motion.h1>
        <motion.p className="hero-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8, duration: .8 }}>
          Replace noise with insight. I’m <b>Imraan N</b> — an aspiring Data Analyst turning financial and business data into decisions.
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05 }}>
          <a className="button light" href="#projects">EXPLORE PROJECTS <span>↘</span></a>
          <a className="button dark" href="#about">ABOUT ME <span>↗</span></a>
        </motion.div>
      </div>
      <div className="hero-mark">IMRAAN N</div>
      <div className="scroll-word">SCROLL TO EXPLORE</div>
    </section>
  )
}
