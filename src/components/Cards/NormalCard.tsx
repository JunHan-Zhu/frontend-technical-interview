import { ReactElement } from "react";
import { Project } from "../../ProjectsContext";
import CardDetails from "../CardDetails";
import { PersonOutline, CalendarTodayOutlined } from "@mui/icons-material";

function NormalCard({
  projectName,
  description,
  projectManagerName,
  projectRegistrationDate,
}: Project): ReactElement {
  const dateString = new Date(projectRegistrationDate).toLocaleDateString();

  return (
    <div className="min-w-[350px] rounded-3xl p-5 space-y-1 bg-white">
      <h2 className="text-xl font-bold">{projectName}</h2>
      <p className="text-base overflow-hidden line-clamp-3">{description}</p>
      <div className="h-[200px] flex items-center justify-center">
        <CardDetails />
      </div>
      <div className="flex justify-between text-sm">
        <span className="flex items-center text-orange-600">
          <PersonOutline className="mr-2" /> {projectManagerName}
        </span>
        <span className="flex items-center">
          <CalendarTodayOutlined className="mr-2" /> {dateString}{" "}
        </span>
      </div>
    </div>
  );
}

export default NormalCard;
