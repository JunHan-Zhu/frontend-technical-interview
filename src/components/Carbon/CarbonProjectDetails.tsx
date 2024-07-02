import { ReactElement, useContext, useState } from "react";
import { FullCard } from "../Cards";
import Layout from "../Layout";
import { ArrowBack } from "@mui/icons-material";

import { useNavigate, useParams } from "react-router-dom";
import { ProjectsContext } from "../../ProjectsContext";

function CarbonProjectDetails(): ReactElement | null {
  const navigate = useNavigate();
  const { projectId } = useParams<{ projectId: string }>();
  const { findProject } = useContext(ProjectsContext);

  if (!projectId) {
    navigate("/carbon-credits");
    return null;
  }

  const project = findProject(projectId);
  if (!project) {
    navigate("/carbon-credits");
    return null;
  }

  const onGoBack = () => {
    navigate("/carbon-credits");
  };

  const goBackIcon = (
    <button onClick={onGoBack}>
      <ArrowBack className="mr-2" style={{ fontSize: 48 }} />
    </button>
  );

  return (
    <Layout headerIcon={goBackIcon} title={project.projectName}>
      <main className="m-6">
        <FullCard {...project} />
      </main>
    </Layout>
  );
}

export default CarbonProjectDetails;
