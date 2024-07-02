import React, { useState, ReactNode, SetStateAction } from 'react';


export interface Project {
  projectId: string,
  projectName: string,
  description: string,
  projectManagerName: string,
  projectRegistrationDate: Date,
  carbonCreditAmount: number
}

interface ProjectsContextInterface {
    projects: Project[], 
    setProjects: (projects: Project[]) => void;
}

const initialState: ProjectsContextInterface ={
   projects: [],
   setProjects: () => {}
}

export const ProjectsContext = React.createContext<ProjectsContextInterface>(initialState);

const ProjectsProvider = ({ children }: {children: ReactNode}) => {
    const [projects, setProjects] = useState<Project[]>([])

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        setProjects
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsProvider