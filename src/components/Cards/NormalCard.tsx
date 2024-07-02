import { ReactElement } from "react";
import { Project } from "../../ProjectsContext";
import cardImage from "../../../public/images/card-image.jpg";

function NormalCard({
  projectName,
  description,
  projectManagerName,
  projectRegistrationDate,
}: Project): ReactElement {
  return (
    <div className="min-w-[350px] border rounded-md p-5 space-y-1">
      <h2 className="text-xl font-bold">{projectName}</h2>
      <p className="text-base">{description}</p>
      <div className="h-[200px] bg-gray-200 flex items-center justify-center rounded">
        <img
          src="/images/card-image.jpg"
          alt="Img Placeholder"
          className="opacity-20"
        ></img>
      </div>
      <div className="flex justify-between text-sm">
        <span>By {projectManagerName}</span>
        <span>{new Date(projectRegistrationDate).toLocaleDateString()}</span>
      </div>
    </div>
  );
}

export default NormalCard;
