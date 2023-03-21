import styles from "../styles";

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    <h1 className=" font-bold text-white leading-[30px] text-[24px] mt-[26px]">{title}</h1>
    <p className=" text-[#b0b0b0] font-normal mt-[16px] text-[18px] flex-1">{subtitle}</p>
  </div>
);

export default NewFeatures;
