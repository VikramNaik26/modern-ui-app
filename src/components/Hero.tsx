import styles from '../style'
import { discount, robot } from '../assets'
import { GetStarted } from '.'

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 flex-col xl:px-0 ${styles.flexStart} px-6 sm:px-16`}
    >
      <div className="flex items-center flex-1 py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20% </span>
          Discount For <span className="text-white">1 Month </span>
          Account
        </p>
      </div>
      <div className="flex flex-row items-center justify-between w-full">
        <h1 className="flex-1 font-semibold font-poppins ss:text-[72px] ss:leading-[100px] leading-[75px] text-[52px] text-white">
          The Next <br className="hidden sm:block" />{' '}
          <span className="text-gradient">Generation</span>
        </h1>
        <div className="hidden mr-0 ss:flex md:mr-4">
          <GetStarted />
        </div>
      </div>
      <h2 className="flex-1 font-semibold font-poppins ss:text-[68px] ss:leading-[100px] leading-[75px] text-[52px] text-white w-full">
        Payment Method.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
        dolores vero quos totam delectus porro quam a, iste enim. Reprehenderit,
        doloremque. Ipsum.
      </p>
    </div>
    <div className={`flex flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={robot}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[85%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
)
export default Hero
