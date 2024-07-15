import Doing from "../components/about/Doing";
import MyInfo from "../components/about/MyInfo";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <motion.div>
        <MyInfo />
      </motion.div>
      <Doing />
    </div>
  );
};

export default About;
