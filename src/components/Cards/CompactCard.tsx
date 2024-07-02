import { ReactElement } from "react";
import { Project } from "../../ProjectsContext";

function CompactCard({
  projectName,
  description,
  projectManagerName,
  projectRegistrationDate,
}: Project): ReactElement {
  return (
    <div className="border rounded-md p-3 flex justify-between">
      <div>
        <h2 className="text-xl font-bold">{projectName}</h2>
        <p className="text-base">{description}</p>
      </div>
      <div className="flex flex-col text-sm">
        <span>By {projectManagerName}</span>
        <span>{new Date(projectRegistrationDate).toLocaleDateString()}</span>
      </div>
    </div>
  );
}

export default CompactCard;
