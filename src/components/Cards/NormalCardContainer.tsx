import { ReactElement, useContext } from "react";
import { ProjectsContext } from "../../ProjectsContext";
import NormalCard from "./NormalCard";
import { Circles } from "react-loader-spinner";

export function NormalCardContainer(): ReactElement {
  const { projects } = useContext(ProjectsContext);

  console.log(projects);

  if (!projects || projects.length === 0) {
    return (
      <div className="grid grid-cols-3 gap-5 my-5">
        <Circles />
        <Circles />
        <Circles />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-5 my-5">
      {projects.map((project) => (
        <NormalCard {...project} />
      ))}
    </div>
  );
}
