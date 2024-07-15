import Navbar from "../common/Navbar";
import { motion } from "framer-motion";

const MainLayout = ({ page, setPage, content }) => {
  return (
    <div className="bg-mediumDark  rounded-2xl  border border-[#3e3e3e] py-6 md:py-12 px-6 relative">
      <div className="hidden md:top-0 md:right-0 h-[62px] rounded-bl-3xl absolute md:flex rounded-tr-2xl border border-[#3e3e3e] justify-center items-center px-8 bg-[#282829] ">
        <Navbar page={page} setPage={setPage} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: "50vh" }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 2,
          },
        }}
      >
        {content}
      </motion.div>
    </div>
  );
};

export default MainLayout;
