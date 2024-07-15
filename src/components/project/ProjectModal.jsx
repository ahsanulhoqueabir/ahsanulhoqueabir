import { IoClose } from "react-icons/io5";
import { skillsImageUrl } from "../../utils/getImageUrl";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./project.css"; // Import CSS file for styles

const ProjectModal = ({ onClose, project }) => {
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };
  const techs = project?.tech.split(",");

  return (
    <div className="modal-overlay " onClick={handleOutsideClick}>
      <section className="project-modal">
        <div className="py-8 relative w-full  mx-auto bg-[#eefdff] text-black px-6 border border-slate-600/50 rounded-2xl shadow-md shadow-teal-100">
          <div className="flex flex-col gap-5 lg:gap-5 xl:gap-5">
            <h2 className="text-2xl font-semibold">{project?.title}</h2>
            <img
              src={skillsImageUrl(project?.img)}
              className="lg:h-[200px] xl:h-full rounded-2xl"
              alt=""
            />
            <div className="flex flex-wrap  gap-3 xl:gap-5 lg:gap-4">
              <a
                target="blank"
                href={project?.liveUrl}
                className="project-link text-sm"
              >
                <span>Live Url</span>
                <FaExternalLinkAlt className="icon text-sm text-primary" />
              </a>
              <a
                target="blank"
                href={project?.github}
                className="project-link text-sm"
              >
                <span>Code</span>{" "}
                <FaGithub className="icon text-sm text-primary" />
              </a>
            </div>
            <p>
              <strong className="text-primary">Details:</strong>{" "}
              {project?.about}
            </p>
            <div className="flex gap-4 items-center">
              <strong className="text-primary">Technologies:</strong>{" "}
              <div className="space-x-3  ">
                {techs.map((tech) => (
                  <Tech key={tech} tech={tech} />
                ))}
              </div>
            </div>
          </div>
          <button onClick={onClose} className="close-button">
            <IoClose className="icon" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectModal;

const Tech = ({ tech }) => {
  return (
    <span className="tech-item bg-teal-200 text-black text-xs px-2 py-1 rounded-xl">
      {tech}
    </span>
  );
};
