import { Button } from '.'
import styles from '../style'

const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.padding} ${styles.marginY} flex-col sm:flex-row bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex flex-col flex-1">
        <h2 className={styles.heading2}>Let's try our services now!</h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quas
          similique provident dolorum, laborum alias quo corporis harum, quaerat
          odio, quidem nobis modi reprehenderit culpa possimus! Modi deserunt
          qui dolor.
        </p>
      </div>
      <div className={`sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  )
}
export default CTA
