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
    tasks: [],
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
        currentProjectId: id,
      };
    });
  };

  const deleteProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        currentProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.currentProjectId
        ),
      };
    });
  };

  const addTask = (text) => {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.currentProjectId,
        id: taskId,
        // id: Math.random(),
      };

      // const newProject = {
      //  ...projectData,
      //   };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks], // get first task as first
      };
    });
  };

  const clearTask = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(
          (task) => task.id !== id
        ),
      };
    });
  };

  const currentProject = projectsState.projects.find(
    (project) => project.id === projectsState.currentProjectId
  );

  let content = (
    <Project
      tasks={projectsState.tasks}
      addTask={addTask}
      clearTask={clearTask}
      deleteProject={deleteProject}
      project={currentProject}
    />
  );

  if (projectsState.currentProjectId === undefined) {
    content = <FirstPage createNewProject={createNewProject} />;
  } else if (projectsState.currentProjectId === null) {
    content = (
      <AddProject addProject={addProject} handleCancel={handleCancel} />
    );
  } else {
    content;
  }

  return (
    <main className="flex mt-24">
      <Aside
        showProject={showProject}
        createNewProject={createNewProject}
        projects={projectsState.projects}
        currentProjectId={projectsState.currentProjectId}
      />
      <Content>{content}</Content>
    </main>
  );
};

export default Main;
