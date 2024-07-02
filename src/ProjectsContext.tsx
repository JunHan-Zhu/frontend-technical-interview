import React, { useState, ReactNode } from "react";

export interface Project {
  projectId: string;
  projectName: string;
  description: string;
  projectManagerName: string;
  projectRegistrationDate: string;
  carbonCreditAmount: number;
}

interface ProjectsContextInterface {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
  findProject: (projectId: string) => Project | undefined;
}

const initialState: ProjectsContextInterface = {
  projects: [],
  setProjects: () => {},
  findProject: () => {
    return undefined;
  },
};

export const ProjectsContext =
  React.createContext<ProjectsContextInterface>(initialState);

const ProjectsProvider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<Project[]>([]);

  const findProject = (projectId: string): Project | undefined => {
    return projects.find((project) => project.projectId === projectId);
  };

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        setProjects,
        findProject,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsProvider;
