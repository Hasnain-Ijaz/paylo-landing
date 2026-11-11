// All page content lives here so it is easy to edit (demo brand, sample content)
export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
]

export const logos = ['Northpeak', 'Quantly', 'Brightway', 'Mosaic', 'Lumen&Co', 'Fieldstone']

export const features = [
  { icon: 'Bolt', title: 'Instant transfers', text: 'Send money to friends and family in seconds, any day of the week.' },
  { icon: 'Globe', title: 'Spend abroad', text: 'Pay in 40+ currencies at the real exchange rate with no hidden markup.' },
  { icon: 'Chart', title: 'Smart insights', text: 'See where your money goes with automatic categories and monthly reports.' },
  { icon: 'Piggy', title: 'Auto-save goals', text: 'Round up every purchase and watch your savings goals fill up on their own.' },
  { icon: 'Card', title: 'Virtual cards', text: 'Create single-use cards for online shopping and freeze them with one tap.' },
  { icon: 'Shield', title: 'Bank-grade security', text: 'Biometric login, real-time alerts and encryption keep every account safe.' },
]

export const steps = [
  { n: '01', title: 'Download the app', text: 'Get Paylo on iOS or Android and sign up with your phone number.' },
  { n: '02', title: 'Verify in minutes', text: 'Scan your ID and take a quick selfie. Most accounts are ready the same day.' },
  { n: '03', title: 'Start moving money', text: 'Add funds, order your card and send your first payment right away.' },
]

export const stats = [
  { value: '2M+', label: 'Happy users' },
  { value: '40+', label: 'Currencies' },
  { value: '4.9', label: 'App store rating' },
  { value: '24/7', label: 'Human support' },
]

export const plans = [
  {
    name: 'Starter',
    monthly: 0,
    yearly: 0,
    blurb: 'Everything you need to get going.',
    features: ['Free virtual card', 'Instant local transfers', 'Spending insights', '1 savings goal'],
  },
  {
    name: 'Plus',
    monthly: 6,
    yearly: 5,
    blurb: 'For people who travel and save.',
    features: ['Everything in Starter', 'Metal physical card', 'Fee-free spending abroad', 'Unlimited savings goals', 'Priority support'],
    popular: true,
  },
  {
    name: 'Business',
    monthly: 15,
    yearly: 12,
    blurb: 'Run payments for your small team.',
    features: ['Everything in Plus', 'Up to 10 team cards', 'Invoices & receipts', 'Accounting exports'],
  },
]

export const reviews = [
  { name: 'Sara Malik', role: 'Freelance designer', text: 'I get paid by clients abroad and Paylo makes it painless. The exchange rate is better than my old bank.' },
  { name: 'Daniel Brooks', role: 'Student', text: 'The round-up savings feature is genius. I saved for a new laptop without even noticing.' },
  { name: 'Aisha Khan', role: 'Small business owner', text: 'Team cards and receipts in one place saved me hours every month. Support replies in minutes.' },
]

export const faqs = [
  { q: 'Is Paylo free to use?', a: 'Yes. The Starter plan is free forever and includes a virtual card, instant transfers and spending insights.' },
  { q: 'How long does it take to open an account?', a: 'Most people finish sign-up in under five minutes and are verified the same day.' },
  { q: 'Can I use my card abroad?', a: 'Absolutely. Pay in more than 40 currencies. Plus and Business plans have no fees for spending abroad.' },
  { q: 'How is my money protected?', a: 'Accounts are protected by biometric login, instant card freezing and real-time transaction alerts.' },
]
