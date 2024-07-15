import projectData from "../../data/projectData";
import Project from "./Project";

const AllProject = () => {
  const projects = projectData;
  const data = projects.data;

  return (
    <div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:mt-24 mt-20
      "
      >
        {data?.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default AllProject;
