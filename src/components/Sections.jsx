import { useState } from 'react'
import * as Icons from './Icons'
import { logos, features, steps, stats, plans, reviews, faqs } from '../data'

export function Logos() {
  return (
    <section className="border-y border-ink/10 bg-mist/60 py-10" aria-label="Trusted by">
      <div className="container-x">
        <p className="text-center text-sm font-medium text-ink/60">Trusted by teams and freelancers at</p>
        <ul className="mt-6 grid grid-cols-2 gap-6 text-center sm:grid-cols-3 md:grid-cols-6">
          {logos.map((l) => (
            <li key={l} className="font-display text-lg font-bold text-ink/40">{l}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Features</p>
          <h2 className="section-title mt-3">Everything your money needs, in one app.</h2>
          <p className="mt-4 text-lg text-ink/70">No branches, no paperwork, no surprise fees. Just a faster way to manage your money.</p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = Icons[f.icon]
            return (
              <article key={f.title} className="rounded-3xl border border-ink/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-card">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                  <Icon />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/70">{f.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function HowItWorks() {
  return (
    <section id="how" className="bg-mist py-20 md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">How it works</p>
          <h2 className="section-title mt-3">Up and running in three steps.</h2>
        </div>
        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="rounded-3xl bg-white p-8">
              <span className="font-display text-5xl font-extrabold text-brand">{s.n}</span>
              <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-ink/70">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Stats() {
  return (
    <section className="bg-ink py-16 text-white" aria-label="Paylo in numbers">
      <dl className="container-x grid grid-cols-2 gap-10 text-center md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse">
            <dt className="mt-2 text-sm font-medium text-white/70">{s.label}</dt>
            <dd className="font-display text-4xl font-extrabold text-sun md:text-5xl">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export function Pricing() {
  const [yearly, setYearly] = useState(true)
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Pricing</p>
          <h2 className="section-title mt-3">Simple plans, no hidden fees.</h2>
          <div className="mt-8 inline-flex rounded-full bg-mist p-1" role="group" aria-label="Billing period">
            <button
              type="button"
              aria-pressed={!yearly}
              onClick={() => setYearly(false)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${!yearly ? 'bg-white shadow' : 'text-ink/60'}`}
            >
              Monthly
            </button>
            <button
              type="button"
              aria-pressed={yearly}
              onClick={() => setYearly(true)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${yearly ? 'bg-white shadow' : 'text-ink/60'}`}
            >
              Yearly <span className="ml-1 text-brand">-20%</span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((p) => {
            const price = yearly ? p.yearly : p.monthly
            return (
              <article
                key={p.name}
                className={`relative flex flex-col rounded-3xl p-8 ${
                  p.popular ? 'bg-brand text-white shadow-card lg:-translate-y-3' : 'border border-ink/10 bg-white'
                }`}
              >
                {p.popular && (
                  <span className="absolute right-6 top-6 rounded-full bg-sun px-3 py-1 text-xs font-bold text-ink">Most popular</span>
                )}
                <h3 className="font-display text-xl font-bold">{p.name}</h3>
                <p className={`mt-1 text-sm ${p.popular ? 'text-white/80' : 'text-ink/60'}`}>{p.blurb}</p>
                <p className="mt-6 flex items-end gap-1">
                  <span className="font-display text-5xl font-extrabold">${price}</span>
                  <span className={`pb-1.5 text-sm ${p.popular ? 'text-white/80' : 'text-ink/60'}`}>/ month</span>
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Icons.Check width={20} height={20} className={p.popular ? 'text-sun' : 'text-brand'} />
                      <span className="text-[15px]">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className={`mt-8 inline-flex justify-center rounded-full px-6 py-3 font-semibold transition ${
                    p.popular ? 'bg-white text-brand hover:bg-white/90' : 'bg-ink text-white hover:bg-ink/90'
                  }`}
                >
                  {price === 0 ? 'Start for free' : `Choose ${p.name}`}
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  return (
    <section id="reviews" className="bg-mist py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Reviews</p>
          <h2 className="section-title mt-3">People love moving money with Paylo.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="flex flex-col rounded-3xl bg-white p-8">
              <div className="flex text-sun" aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((i) => <Icons.Star key={i} width={18} height={18} />)}
              </div>
              <blockquote className="mt-5 flex-1 text-[17px] leading-relaxed">{r.text}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-soft font-display font-bold text-brand">
                  {r.name.split(' ').map((w) => w[0]).join('')}
                </span>
                <span>
                  <span className="block font-semibold">{r.name}</span>
                  <span className="block text-sm text-ink/60">{r.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container-x grid gap-12 md:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title mt-3">Questions? We have answers.</h2>
          <p className="mt-4 text-lg text-ink/70">Can&apos;t find what you need? Our support team is online 24/7.</p>
        </div>
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q}>
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-lg font-semibold"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    {f.q}
                    <Icons.Plus className={`shrink-0 text-brand transition-transform ${isOpen ? 'rotate-45' : ''}`} />
                  </button>
                </h3>
                {isOpen && (
                  <p id={`faq-${i}`} className="pb-6 pr-10 leading-relaxed text-ink/70">{f.a}</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function CTA() {
  return (
    <section id="cta" className="pb-20 md:pb-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] bg-brand px-8 py-14 text-white md:px-16 md:py-20">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-sun" aria-hidden="true" />
          <div className="relative max-w-xl">
            <h2 className="font-display text-4xl font-extrabold leading-tight md:text-5xl">Your money, finally on your side.</h2>
            <p className="mt-4 text-lg text-white/85">Open a free account in minutes. No paperwork, no monthly fees on Starter.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#top" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-brand hover:bg-white/90">
                Download for iOS
              </a>
              <a href="#top" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold text-white hover:bg-white/10">
                Download for Android
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const cols = [
    { h: 'Product', l: ['Features', 'Pricing', 'Cards', 'Business'] },
    { h: 'Company', l: ['About', 'Careers', 'Press', 'Contact'] },
    { h: 'Legal', l: ['Privacy', 'Terms', 'Security', 'Cookies'] },
  ]
  return (
    <footer className="border-t border-ink/10 py-14">
      <div className="container-x grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div>
          <Icons.Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/60">
            The smart money app for sending, spending and saving. Demo project built with React, Vite and Tailwind CSS.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <p className="font-semibold">{c.h}</p>
            <ul className="mt-4 space-y-2.5">
              {c.l.map((x) => (
                <li key={x}><a href="#top" className="text-sm text-ink/60 hover:text-ink">{x}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container-x mt-12 text-sm text-ink/50">© {new Date().getFullYear()} Paylo. Built by Hasnain Ijaz.</div>
    </footer>
  )
}
