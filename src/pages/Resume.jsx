import Title from "../components/common/Title";
import Edu from "../components/resume/Edu";
import Experience from "../components/resume/Experience";
import SkillPercent from "../components/resume/SkillPercent";

const Resume = () => {
  return (
    <div>
      <Title title={"Resume"} />
      <Experience />
      <Edu />
      <SkillPercent />
    </div>
  );
};

export default Resume;
