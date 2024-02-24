import { feedback } from '../constants'
import styles from '../style'
import { FeedbackCard } from '.'

const Testimonials = () => {
  return (
    <section id="clients" className={`${styles.paddingY} flex-col relative`}>
      <div className="absolute z-[0] -right-[50%] w-[60%] h-[60%] rouded-full blue__gradient" />

      <div className="flex flex-col items-center justify-between w-full mb-6 md:flex-row sm:mb-16 relative z-[1]">
        <h2 className={styles.heading2}>
          What people are <br className="hidden sm:hidden" />
          saying about us
        </h2>
        <div className="w-full mt-6 md:mt-0 ">
          <p className={`${styles.paragraph} text-left max-w-[470px]`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
            facere labore atque quaerat voluptates, et laborum quia iste vero
            doloribus.
          </p>
        </div>
      </div>
      <div className="relative flex flex-wrap justify-center w-full sm:justify-center feedback-container z-[1]">
        {feedback.map((card, index) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  )
}
export default Testimonials
