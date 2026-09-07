import { journey } from '../data/portfolioData'
import { motion } from 'framer-motion'

export default function Journey() {
  return <section id="journey" className="section journey-section">
    <div className="section-label">04 <span /> JOURNEY</div>
    <h2 className="section-title">BUILDING THE<br /><span>ANALYTICS FREQUENCY.</span></h2>
    <div className="journey-list">{journey.map(([tag, title, copy]) => <motion.div className="journey-row" key={title} initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
      <small>{tag}</small><div><h3>{title}</h3><p>{copy}</p></div><span>●</span>
    </motion.div>)}</div>
  </section>
}
