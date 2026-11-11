import { useEffect, useState } from 'react'
import { navLinks } from '../data'
import { Logo, Menu, Close } from './Icons'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur transition-shadow ${
        scrolled ? 'shadow-[0_1px_0_rgba(11,27,63,0.08)]' : ''
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-20" aria-label="Main">
        <a href="#top" aria-label="Paylo home">
          <Logo />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-[15px] font-medium text-ink/70 transition hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#pricing" className="px-3 py-2 text-[15px] font-semibold text-ink hover:text-brand">
            Log in
          </a>
          <a href="#cta" className="btn-primary !py-2.5 text-[15px]">
            Get the app
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink/10 bg-white md:hidden">
          <ul className="container-x flex flex-col py-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-ink/80"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2 pb-3">
              <a href="#cta" onClick={() => setOpen(false)} className="btn-primary w-full">
                Get the app
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
