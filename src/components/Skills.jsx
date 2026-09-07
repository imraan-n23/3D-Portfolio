import { skills } from '../data/portfolioData'
import { motion } from 'framer-motion'

export default function Skills() {
  return <section id="skills" className="section skills-section">
    <div className="section-label">02 <span /> TECHNOLOGY</div>
    <h2 className="section-title">TOOLS THAT<br /><span>TURN DATA LOUD.</span></h2>
    <div className="skill-list">
      {skills.map(([n, name, desc]) => <motion.div className="skill-row" key={name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <small>{n}</small><h3>{name}</h3><p>{desc}</p><i>↗</i>
      </motion.div>)}
    </div>
  </section>
}
