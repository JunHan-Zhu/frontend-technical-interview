import { ReactElement } from "react";
import { Project } from "../../ProjectsContext";
import {
  PersonOutline,
  CalendarTodayOutlined,
  MailOutlineOutlined,
} from "@mui/icons-material";

function CompactCard({
  projectName,
  description,
  projectManagerName,
  projectRegistrationDate,
}: Project): ReactElement {
  const dateString = new Date(projectRegistrationDate).toLocaleDateString();

  return (
    <div className="rounded-lg p-3 flex justify-between bg-white p-6">
      <div className="mr-6">
        <h2 className="text-xl font-bold flex items-center mb-2">
          <MailOutlineOutlined className="mr-2" /> {projectName}
        </h2>
        <p className="text-base overflow-hidden line-clamp-2">{description}</p>
      </div>
      <div className="flex flex-col items-center justify-center text-sm">
        <span className="flex items-center text-orange-600 mb-2">
          <PersonOutline className="mr-2" /> {projectManagerName}
        </span>
        <span className="flex items-center">
          <CalendarTodayOutlined className="mr-2" /> {dateString}{" "}
        </span>
      </div>
    </div>
  );
}

export default CompactCard;
