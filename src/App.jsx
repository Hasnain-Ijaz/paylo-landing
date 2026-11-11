import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Logos, Features, HowItWorks, Stats, Pricing, Testimonials, FAQ, CTA, Footer } from './components/Sections'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Features />
        <HowItWorks />
        <Stats />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
