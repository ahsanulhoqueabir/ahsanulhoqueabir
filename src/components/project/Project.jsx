import { FolderImage } from "../../utils/getImageUrl";
import SingleProject from "./ProjectModal";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import AutoScrollImage from "./AutoScrollImage";

const Project = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        key={project?.id}
        className=" cursor-pointer"
      >
        <motion.div
          className="bg-[#31363F] rounded-2xl"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
        >
          <AutoScrollImage src={FolderImage("project", project?.img)} />
          <div className="flex items-center justify-between px-3 py-4 pb-5 ">
            <h3 className="text-lg md:text-2xl font-bold font-philosopher">
              {project?.title}
            </h3>
            <div className=" flex gap-7 justify-between">
              <a target="blank" href={project?.liveUrl} className=" font-bold">
                <FaExternalLinkAlt className=" hover:text-primary text-primary" />
              </a>
              <a target="blank" href={project?.github} className="font-bold">
                <FaGithub className=" hover:text-primary text-primary" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      {showModal && (
        <SingleProject onClose={() => setShowModal(false)} project={project} />
      )}
    </>
  );
};

export default Project;
