import { useEffect, useRef } from "react";
import Title from "./../common/Title";
import { motion, useAnimation } from "framer-motion";
import { skillsSet } from "../../data/Data";

const SkillPercent = () => {
  const skills = skillsSet;
  return (
    <section className="mt-12 ">
      <Title sTitle title={"My Proficiency"} />
      <div className="bg-[#31363F] p-5 shadow-2xl border border-[#383838] rounded-2xl grid grid-cols-1 gap-6 lg:gap-10 mt-6">
        {skills.map((skill, index) => (
          <EachSkill key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default SkillPercent;

const EachSkill = ({ skill }) => {
  return (
    <div className="rounded shadow-2xl">
      <div className="flex justify-between items-center py-2">
        <div>
          <h4 className="text-lg font-semibold text-white relative font-philosopher">
            {skill.name}
            <span className="p-1 py-[1px]  absolute leading-4 -top-3 text-[8px] bg-teal-200 text-black rounded-xl capitalize ">
              {skill.category}
            </span>
          </h4>
        </div>
        <h4 className="text-sm font-semibold text-white">{skill.level}</h4>
      </div>
      <ProgressBar progress={parseInt(skill.level)} />
    </div>
  );
};

const ProgressBar = ({ progress }) => {
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            width: `${progress}%`,
            transition: { duration: 0.5, ease: "easeOut" },
          });
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [progress, controls]);

  return (
    <div
      ref={ref}
      style={{ background: "black", borderRadius: "5px", overflow: "hidden" }}
    >
      <motion.div
        style={{ height: "8px", background: "white" }}
        initial={{ width: 0 }}
        animate={controls}
      />
    </div>
  );
};
