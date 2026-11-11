import { Arrow, Star, Check } from './Icons'

function PhoneMockup() {
  const tx = [
    { name: 'Spotify', cat: 'Subscriptions', amt: '-$9.99', color: 'bg-emerald-100 text-emerald-700' },
    { name: 'Salary', cat: 'Income', amt: '+$3,200.00', color: 'bg-brand-soft text-brand', plus: true },
    { name: 'Grocery Mart', cat: 'Food', amt: '-$64.20', color: 'bg-amber-100 text-amber-700' },
  ]
  return (
    <div className="relative mx-auto w-[280px] sm:w-[300px]">
      {/* Floating card behind the phone */}
      <div className="absolute -left-32 top-24 hidden h-44 w-72 -rotate-12 rounded-2xl bg-sun p-5 shadow-card sm:block" aria-hidden="true">
        <div className="flex items-start justify-between">
          <span className="font-display text-lg font-bold text-ink">Paylo</span>
          <span className="h-8 w-11 rounded-md bg-ink/15" />
        </div>
        <p className="mt-10 font-display text-lg tracking-[0.2em] text-ink/80">•••• 4821</p>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-ink/60">Virtual · Debit</p>
      </div>

      {/* Phone */}
      <div className="relative rounded-[42px] bg-ink p-3 shadow-card">
        <div className="rounded-[32px] bg-mist px-4 pb-6 pt-8">
          <div className="mx-auto mb-5 h-1.5 w-16 rounded-full bg-ink/15" aria-hidden="true" />
          <p className="text-xs font-medium text-ink/60">Good morning, Sara</p>
          <div className="mt-3 rounded-2xl bg-brand p-4 text-white">
            <p className="text-xs text-white/75">Total balance</p>
            <p className="mt-1 font-display text-3xl font-bold">$12,480.50</p>
            <p className="mt-1 text-xs font-medium text-white/80">+ $1,240 this month</p>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[11px] font-semibold">
              <span className="rounded-lg bg-white/15 py-2">Send</span>
              <span className="rounded-lg bg-white/15 py-2">Request</span>
              <span className="rounded-lg bg-white/15 py-2">Top up</span>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm font-semibold">Recent activity</p>
            <p className="text-xs font-medium text-brand">See all</p>
          </div>
          <ul className="mt-2 space-y-2">
            {tx.map((t) => (
              <li key={t.name} className="flex items-center gap-3 rounded-xl bg-white p-2.5">
                <span className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold ${t.color}`}>
                  {t.name[0]}
                </span>
                <span className="flex-1">
                  <span className="block text-[13px] font-semibold leading-tight">{t.name}</span>
                  <span className="block text-[11px] text-ink/60">{t.cat}</span>
                </span>
                <span className={`text-[13px] font-semibold ${t.plus ? 'text-emerald-600' : 'text-ink'}`}>{t.amt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Toast */}
      <div className="absolute -right-4 -bottom-6 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-card sm:-right-20" aria-hidden="true">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white">
          <Check width={20} height={20} strokeWidth={3} />
        </span>
        <span>
          <span className="block text-[13px] font-semibold">Payment sent</span>
          <span className="block text-xs text-ink/60">$250.00 to Daniel</span>
        </span>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute right-[-10%] top-[-20%] h-[640px] w-[640px] rounded-full bg-brand-soft" aria-hidden="true" />
      <div className="container-x relative grid items-center gap-14 pb-20 pt-12 md:grid-cols-2 md:pb-28 md:pt-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-1.5 text-sm font-semibold text-brand">
            <span className="h-2 w-2 rounded-full bg-brand" />
            Now in 40+ countries
          </span>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Money that moves at <span className="text-brand">your speed.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/70">
            Send, spend and save from one simple app. Instant transfers, real exchange rates and smart savings goals that grow on autopilot.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#cta" className="btn-primary">
              Open free account <Arrow width={18} height={18} />
            </a>
            <a href="#how" className="btn-ghost">See how it works</a>
          </div>
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3" aria-hidden="true">
              {['bg-sun', 'bg-brand', 'bg-emerald-400', 'bg-rose-400'].map((c) => (
                <span key={c} className={`h-10 w-10 rounded-full border-2 border-white ${c}`} />
              ))}
            </div>
            <div>
              <div className="flex text-sun" aria-label="Rated 4.9 out of 5">
                {[0, 1, 2, 3, 4].map((i) => <Star key={i} width={16} height={16} />)}
              </div>
              <p className="text-sm text-ink/70">Loved by 2M+ users</p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end md:pr-10">
          <PhoneMockup />
        </div>
      </div>
    </section>
  )
}
