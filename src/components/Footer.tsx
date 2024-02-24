import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'
import styles from '../style'

const Footer = () => (
  <footer className={`flex-col ${styles.flexCenter} ${styles.paddingY}`}>
    <div className={`${styles.flexStart} flex-col md:flex-row mb-8 w-full`}>
      <div className="flex flex-col justify-start flex-1 mr-10">
        <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
          provident quam nihil, est impedit excepturi
        </p>
      </div>

      <div className="flex flex-wrap justify-between flex-[1.5] w-full  md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.title}
            className="flex flex-col my-4 sm:my-0 min-w-[150px]"
          >
            <h4 className="font-medium font-poppins text-[18px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul className="mt-4 list-none">
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="flex flex-col items-center justify-between w-full pt-6 md:flex-row border-t-[1px] border-t-[#3F3E45]">
      <p className="font-normal font-poppins text-[18px] leading-[27px] text-white text-center">
        2024 HooBank. All Rights Reserved
      </p>

      <div className="flex flex-row mt-6 md:mt-0">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt="social"
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
            }`}
          />
        ))}
      </div>
    </div>
  </footer>
)
export default Footer
