import { motion } from "framer-motion";
const Profile = () => {
  return (
    <section>
      <div className="flex gap-6 lg:flex-col lg:gap-1 lg:justify-center items-center">
        <div>
          <div className="flex w-[120px] h-[130px] mx-auto ">
            <img
              style={{
                borderRadius: "34% 66% 70% 30% / 39% 30% 70% 61%",
              }}
              className="z-[10]   shadow-md shadow-teal-500"
              src="https://i.ibb.co/61zgX8X/sdfdsgasg.png"
              alt="ahsan"
            />
          </div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, x: "-100vh" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 2 }}
          >
            <h2 className=" md:text-center lg:text-2xl mt-5 mb-3  font-semibold font-philosopher md:text-3xl">
              MD AHSANUL HOQUE ABIR
            </h2>
          </motion.div>

          <p className="text-center bg-[#2b2b2c] w-full sm:w-[152px] rounded-lg flex  justify-center text-[12px] py-1 px-4 mb-3">
            MERN Developer
          </p>
          <div className="flex items-center gap-3">
            <div className="size-2 animate-ping border-2 bg-green-600 shadow-xl rounded-full "></div>
            <p className="text-xs text-nowrap md:text-sm  text-center">
              Available for new projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
