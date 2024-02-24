import { Button } from '.'
import { card } from '../assets'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="hidden sm:block" />
          in few easy steps
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          vel, quidem modi corrupti dolorem numquam, rerum quam dicta cumque
          perspiciatis nemo, eaque necessitatibus fuga ex veniam laborum
          cupiditate illo velit?
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%] " />
      </div>
    </section>
  )
}
export default CardDeal
