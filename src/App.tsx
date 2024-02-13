import styles from './style.ts'

import {
  Navbar,
  Billing,
  Business,
  Button,
  CardDeal,
  Clients,
  CTA,
  FeedbackCard,
  Footer,
  GetStarted,
  Hero,
  Stats,
  Testimonials,
} from './components'

const App = () => {
  return (
    <main className="w-full overflow-hidden bg-primary">
      <header className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </header>
      <section className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </section>
      <section className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </section>
    </main>
  )
}
export default App
