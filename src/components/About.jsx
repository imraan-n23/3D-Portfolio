import { motion } from 'framer-motion'

export default function About() {
  return <section id="about" className="section about-section">
    <div className="section-label">01 <span /> ABOUT</div>
    <div className="about-grid">
      <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>YOUR NUMBERS<br />SHOULD <span>WORK FOR YOU.</span></motion.h2>
      <motion.div initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="body-copy">I am a B.Com Professional Accounting student with a strong interest in Data Analytics, Finance, Accounting and Business Intelligence. I enjoy transforming raw data into meaningful insights through Excel, Power BI, SQL and Python.</p>
        <div className="fact-list">
          <div><span>INSTITUTION</span><b>NGM College, Pollachi</b></div>
          <div><span>FOCUS</span><b>Analytics · Finance · BI</b></div>
          <div><span>APPROACH</span><b>Data → Insight → Decision</b></div>
        </div>
      </motion.div>
    </div>
  </section>
}
