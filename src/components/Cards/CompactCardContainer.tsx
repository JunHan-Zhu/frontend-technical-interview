import { ReactElement, useContext } from "react";
import { ProjectsContext } from "../../ProjectsContext";
import { Circles } from "react-loader-spinner";
import CompactCard from "./CompactCard";

export function CompactCardContainer(): ReactElement {
  const { projects } = useContext(ProjectsContext);

  if (!projects || projects.length === 0) {
    return (
      <div className="grid grid-cols-2 gap-5 my-5">
        <Circles />
        <Circles />
        <Circles />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-5 my-5">
      {projects.map((project) => (
        <CompactCard {...project} />
      ))}
    </div>
  );
}

export default CompactCardContainer;
