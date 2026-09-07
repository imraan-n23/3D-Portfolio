import { projects } from '../data/portfolioData'
import { motion } from 'framer-motion'

export default function Projects() {
  return <section id="projects" className="section projects-section">
    <div className="section-label">03 <span /> SELECTED WORK</div>
    <div className="projects-intro"><h2>DATA WITH<br /><span>IMPACT.</span></h2><p>Selected work across personal finance, e-commerce, retail intelligence and SQL analytics.</p></div>
    <div className="project-list">
      {projects.map((project) => <motion.article className="project" key={project.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="project-no">{project.number}</div>
        <div className="project-main">
          <div className="project-visual"><span>{project.number}</span><div className="visual-lines" /></div>
          <div className="project-info">
            <h3>{project.title}</h3>
            <p>{project.copy}</p>
            <div className="chips">{project.tech.map(t => <span key={t}>{t}</span>)}</div>
            <ul>{project.points.map(point => <li key={point}>{point}</li>)}</ul>
            <a className="project-link" href={project.github} target="_blank" rel="noreferrer">VIEW ON GITHUB <b>↗</b></a>
          </div>
        </div>
      </motion.article>)}
    </div>
  </section>
}
