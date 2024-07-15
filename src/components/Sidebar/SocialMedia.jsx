import { FaLinkedin, FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="flex justify-end gap-6 pr-2 text-gray-400 text-xl">
      <a
        title="blank"
        href="https://www.linkedin.com/in/AhsanulHoqueAbir
"
        className="text-primary hover:text-white duration-300"
      >
        <FaLinkedin />
      </a>
      <a
        title="blank"
        href="https://github.com/ahsanulhoqueabir 
"
        className="text-primary hover:text-white duration-300"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default SocialMedia;
