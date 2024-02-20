"use client";

import { useState } from "react";
import Content from "./Content";
import FirstPage from "./FirstPage";
import AddProject from "./AddProject";
import Project from "./Project";
import Aside from "./Aside";

const Main = () => {



  const [projectsState, setProjectsState] = useState({
    currentProjectId: undefined,
    projects: [],
  });

  const createNewProject = () => {
    setProjectsState((prevProjectState) => {
      return {
        ...prevProjectState,
        currentProjectId: null,
      };
    });
  };

  const handleCancel = () => {
    setProjectsState((prevProjectState) => {
      return {
        ...prevProjectState,
        currentProjectId: undefined,
      };
    });
  };
  
  const addProject = (projectData) => {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      // const newProject = {
      //  ...projectData,
      //   };

      return {
        ...prevState,
        currentProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  // const openProject = () =>{
  //   setProjectsState((prevProjectState) => {
  //     return {
  //       ...prevProjectState,
  //       currentProjectId: "project"
  //     }
  //   })
  // }

  const showProject = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        currentProjectId: id
      }
    })
  }

  const currentProject = projectsState.projects.find(project => project.id === projectsState.currentProjectId )


  let content = <Project project={currentProject}/>;

  if (projectsState.currentProjectId === undefined) {
    content = <FirstPage createNewProject={createNewProject} />
  } else if (projectsState.currentProjectId === null) {
    content = (
      <AddProject addProject={addProject} handleCancel={handleCancel} />
    )
  } else {
    content;
  } 

  return (
    <main className="flex mt-24">
      <Aside showProject={showProject} createNewProject={createNewProject} projects={projectsState.projects}/>
      <Content>{content}</Content>
    </main>
  );
};

export default Main;
