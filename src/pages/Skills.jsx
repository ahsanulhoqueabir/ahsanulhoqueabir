import { useEffect, useRef } from "react";
import Title from "../components/common/Title";
import { skillsSet } from "../data/Data";
import { skillsImageUrl } from "../utils/getImageUrl";
import { motion, useAnimation } from "framer-motion";

const Skills = () => {
  const data = skillsSet;
  return (
    <div>
      <Title title={"Skills"} />
      <div className="mt-9 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-between gap-8">
        {data?.map((item, index) => (
          <Skill item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Skills;

const Skill = ({ item }) => {
  const controls = useAnimation();
  const ref = useRef();
  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            rotate: 360,
            scale: 1,
            transition: {
              duration: 0.8,
              ease: "easeOut",
            },
          });
        }
      },
      { threshold: 0.1 }
    );
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => observer.unobserve(currentRef);
  }, [item, controls]);
  return (
    <div
      ref={ref}
      key={item.id}
      className="flex relative flex-col justify-center items-center"
    >
      <motion.div initial={{ scale: 0 }} animate={controls}>
        <motion.img
          whileHover={{ scale: 1.1 }}
          src={skillsImageUrl(item.img)}
          className=" w-full  duration-300 cursor-pointer md:w-[140px] md:h-[140px] bg-white rounded-2xl p-2"
          alt=""
        />
        <h4 className="flex justify-center mt-3">{item?.name}</h4>
        <span className="p-2 py-[3px]  absolute leading-4 top-2 right-3 text-[12px] bg-teal-200 text-black rounded-xl capitalize ">
          {item?.category}
        </span>
      </motion.div>
    </div>
  );
};
