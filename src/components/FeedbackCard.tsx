import { quotes } from '../assets'

const FeedbackCard = ({ content, name, title, img }: any) => (
  <div className="flex flex-col justify-between px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 mr-0 sm:mr-5 my-5 feedback-card">
    <img
      src={quotes}
      alt="quotes"
      className="h-[42px] w-[42px] object-contain"
    />
    <p className="font-poppins text-[18px] leading-[32px] font-normal text-white my-10">
      {content}
    </p>
    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48p] h-[48px] rounded-full" />

      <div className="flex flex-col ml-4">
        <h4 className="font-poppins text-[18px] leading-[32px] font-semibold text-white">
          {name}
        </h4>
        <p className="font-poppins text-[16px] leading-[24px] font-normal text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
)
export default FeedbackCard
