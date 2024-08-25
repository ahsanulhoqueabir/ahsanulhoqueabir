import { GiOpenBook } from "react-icons/gi";
import Title from "../common/Title";
import "./EduStyle.css";

const Edu = () => {
  return (
    <section className="my-8">
      <div className=" flex items-center gap-3">
        <div className="bg-[#212122] rounded-xl border w-[48px] h-[48px] shadow-xl border-[#383838] flex justify-center items-center p-1">
          <GiOpenBook className=" text-lg font-bold text-primary" />
        </div>
        <Title sTitle title={"Education"} />
      </div>

      <div className="time-line-area flex flex-col gap-8">
        <div className="text-[15px] flex flex-col gap-1">
          <h3 className="font-philosopher font-bold ">Jagannath University</h3>
          <h3 className=" text-primary mt-1">Jan, 2023 - present</h3>
          <p>Department of Computer Science & Engineering.</p>
        </div>
        <div className="text-[15px] flex flex-col gap-1">
          <h3 className="font-philosopher font-bold ">
            Hazera-Taju University College
          </h3>
          <h3 className=" text-primary mt-1">June, 2018 - May, 2020</h3>
          <p>Completed Higher Secondary Certificate (HSC) in Science.</p>
        </div>
        <div className="text-[15px] flex flex-col gap-1">
          <h3 className="font-philosopher font-bold ">
            Gachbaria N. G. &nbsp;govt. &nbsp;High School
          </h3>
          <h3 className=" text-primary mt-1">May, 2016 - June, 2018</h3>
          <p>Completed Secondary School Certificate (SSC) in Science.</p>
        </div>
      </div>
    </section>
  );
};

export default Edu;
