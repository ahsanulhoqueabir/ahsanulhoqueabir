import { FolderImage } from "../../utils/getImageUrl";
import { motion } from "framer-motion";

const SingleComponent = ({ item }) => {
  const url = FolderImage("doing", item.img);
  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      animate="initial"
      variants={{
        initial: { backgroundColor: "#31363F" },
        hover: {
          backgroundColor: "rgba(255, 255, 255, 0)",
          transition: { duration: 1, ease: "easeInOut" },
        },
      }}
      className="bg-[#222831] relative px-4 py-8 rounded-2xl border border-[#383838] flex gap-4 items-start"
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full rounded-lg"
        variants={{
          initial: { opacity: 0 },
          hover: {
            opacity: 0.5,
            background: [
              "linear-gradient(90deg, rgba(255,0,150,0.5), rgba(0,204,255,0.5))",
              "linear-gradient(90deg, rgba(0,204,255,0.5), rgba(255,0,150,0.5))",
            ],
            transition: {
              duration: 0.5,
              ease: "easeInOut",
              loop: Infinity,
              repeatDelay: 1,
            },
          },
        }}
        initial="initial"
        animate="initial"
        whileHover="hover"
      />
      <div>
        <img src={url} className="text-4xl size-10 text-primary" alt="" />{" "}
      </div>
      <div>
        <h2 className="md:text-lg font-bold font-philosopher">{item.title}</h2>
        <p className="text-[15px] pt-1">{item.desc}</p>
      </div>
    </motion.div>
  );
};

export default SingleComponent;
