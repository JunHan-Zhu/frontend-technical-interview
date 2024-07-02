import { ReactElement, useCallback, useContext, useEffect } from "react";
import { AuthenticationContext } from "../AuthenticationContext";
import { Project, ProjectsContext } from "../ProjectsContext";
import Carbons from "./Carbons";

function CarbonsContainer(): ReactElement {
  const { token } = useContext(AuthenticationContext);
  const { setProjects } = useContext(ProjectsContext);

  const fetchProjects = useCallback(async () => {
    const data = await fetch(`http://localhost:8080/api/projects`, {
      method: "GET",
      headers: new Headers({ Authorization: token }),
    }).then((res) => {
      if (res.status === 200) {
        return res.json() as Promise<[Project]>;
      }
    });

    if (!data) return;
    setProjects(data);
  }, []);

  useEffect(() => {
    fetchProjects();
  }, []);

  return <Carbons />;
}

export default CarbonsContainer;
