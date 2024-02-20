
const Projects = ({ projects, showProject }) => {
  console.log("Projects", projects)
  return (
    <div className="flex flex-col gap-2">
      {
        projects.map((project, index) => {

          // if(project.id === currentProductId) {

          // }

          return (
            <span onClick={() => showProject(project.id)} key={project.id} className='cursor-pointer py-2 px-3 bg-slate-300 text-slate-600 font-semibold'>Project - {project.title} {index + 1}</span>
          )
        })
      }
      {/* <span className='cursor-pointer py-2 px-3 bg-slate-300 text-slate-600 font-semibold'>Project 1</span> */}
    </div>
  );
};

export default Projects;
