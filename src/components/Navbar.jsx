import { useEffect, useState } from 'react'

const links = ['Home', 'About', 'Skills', 'Projects', 'Journey', 'Contact']

export default function Navbar() {
  const [active, setActive] = useState('Home')
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > last && y > 160)
      last = y
      for (const name of links) {
        const id = name.toLowerCase()
        const section = document.getElementById(id)
        if (!section) continue
        const rect = section.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.48 && rect.bottom > window.innerHeight * 0.28) {
          setActive(name)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={hidden ? 'nav nav-hidden' : 'nav'}>
      <a className="brand" href="#home">IMRAAN N<span>®</span></a>
      <div className="nav-links">
        {links.map((name) => <a key={name} className={active === name ? 'active' : ''} href={`#${name.toLowerCase()}`}>{name}</a>)}
      </div>
    </nav>
  )
}
