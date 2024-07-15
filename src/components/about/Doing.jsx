import Title from "../common/Title";
import { likeToDO } from "../../data/Data";
import SingleComponent from "./SingleComponent";

const Doing = () => {
  const doing = likeToDO;
  return (
    <section className="my-16">
      <Title sTitle title={"What I'm Doing"} />
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {doing.map((item, ind) => (
          <SingleComponent key={ind} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Doing;
