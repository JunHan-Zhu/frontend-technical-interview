import { ReactElement } from "react";
import { Project } from "../../ProjectsContext";
import CardDetails from "./CardDetails";
import { PersonOutline, CalendarTodayOutlined } from "@mui/icons-material";

function FullCard({
  description,
  projectManagerName,
  projectRegistrationDate,
}: Project): ReactElement {
  const dateString = new Date(projectRegistrationDate).toLocaleDateString();

  return (
    <div className="flex flex-row min-w-[350px] rounded-3xl p-5 space-y-1 bg-white">
      <div className="h-[300px] lg:w-1/3 flex items-center justify-center">
        <CardDetails />
      </div>

      <div className="lg:w-2/3 m-6">
        <p className="text-base">{description}</p>
        <div className="flex text-sm mt-8">
          <span className="flex items-center text-orange-600 mr-8">
            <PersonOutline className="mr-2" /> {projectManagerName}
          </span>
          <span className="flex items-center">
            <CalendarTodayOutlined className="mr-2" /> {dateString}
          </span>
        </div>
      </div>
    </div>
  );
}

export default FullCard;
