import Title from "../common/Title";
import Marquee from "react-fast-marquee";
import q1 from "../../assets/q1.png";
import q2 from "../../assets/q2.png";
import q3 from "../../assets/q3.png";
import q4 from "../../assets/q4.png";
import q5 from "../../assets/q5.png";
import q6 from "../../assets/q6.png";

const PortfolioSlide = () => {
  return (
    <div>
      <Title sTitle title="Visual Sliders"></Title>
      <Marquee pauseOnClick speed={20}>
        <div className="max-w-container mx-auto py-10 lgl:py-32 flex flex-col justify-center items-center gap-12">
          <div className="grid grid-cols-6 gap-5">
            <img className="w-[150px] md:w-[300px] h-[600px]" src={q1} alt="project1" />
            <img className="w-[150px] md:w-[300px] h-[600px]" src={q3} alt="project1" />
            <img className="w-[150px] md:w-[300px] h-[600px]" src={q4} alt="project1" />
            <img className="w-[150px] md:w-[300px] h-[600px]" src={q5} alt="project1" />
            <img className="w-[150px] md:w-[300px] h-[600px]" src={q6} alt="project1" />
            <img className="w-[150px] md:w-[300px] h-[600px]" src={q2} alt="project1" />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default PortfolioSlide;
