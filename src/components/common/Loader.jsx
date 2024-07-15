import loderGif from "../../assets/gif/loader2.gif";
import { motion } from "framer-motion";

const Loader = () => {
  const message = "Welcome To My Portfolio.";
  const wordArray = message.split(" ");
  return (
    <div className=" h-screen bg-[#2a2826] flex justify-center items-center flex-col">
      <div className="text-2xl md:text-3xl font-bold mb-3 text-primary text-center">
        {wordArray.map((word, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 3,
              delay: idx / 7,
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 0.5 }}
      >
        <img className="w-1/2 mx-auto" src={loderGif} alt="loderGif" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 2 }}
      >
        <h3 className=" text-primary text-xl md:text-2xl mb-2">
          Wishing you have a good day...
        </h3>
      </motion.div>
    </div>
  );
};

export default Loader;
