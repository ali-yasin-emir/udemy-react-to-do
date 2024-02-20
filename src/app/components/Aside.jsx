"use client"

import Button from "./Button";
import Projects from "./Projects";

const Aside = ({projects, createNewProject, showProject }) => {

  return (
    <aside className="cursor-pointer rounded-lg h-screen w-[360px] bg-slate-900 flex flex-col px-12 pt-16 gap-8">
      <h1 className="text-gray-100 text-2xl font-bold">Your Projects</h1>
      <Button
        onClick={createNewProject}
        className="w-[140px] font-medium hover:brightness-150 transition-all ease-in-out duration-200"
        text="+ add project"
      />
      <Projects showProject={showProject} projects={projects}  />
    </aside>
  );
};

export default Aside;
