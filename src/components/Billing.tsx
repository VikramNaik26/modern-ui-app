import { google, bill, apple } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="Billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily Control Your <br className="hidden sm:block" />
          Billing & Invoicing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minus,
          est placeat ut numquam dolor. Consequuntur, quidem alias magni vel
          excepturi corrupti ipsam tempore eligendi nesciunt nobis dolorum illo
          veritatis.
        </p>

        <div className="flex flex-row flex-wrap mt-6 sm:mt-10">
          <img
            src={apple}
            alt="apple store"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="google play store"
            className="w-[128px] h-[42px] object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  )
}
export default Billing
