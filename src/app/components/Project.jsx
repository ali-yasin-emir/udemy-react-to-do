import Button from "./Button";
import Input from "./Input";
import Tasks from "./Tasks";

const Project = ({project, deleteProject, addTask, clearTask, tasks}) => {

  const formattedDate = new Date(project.date).toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  return (
    <div className="flex flex-col gap-12 rounded-lg w-full pt-24 px-12 bg-slate-400">
      <div className="flex flex-col w-[600px]">
        <div className="flex justify-between">
          <h1 className="mb-4 text-4xl font-semibold">{project.title}</h1>
          <Button
            onClick={deleteProject}
            text="delete"
            className="bg-transparent text-white font-extralight border-[1px]"
          />
        </div>
        <span className="mb-8 bg-slate-600 w-fit px-2 py-1 text-gray-300">
          {formattedDate}
        </span>
        <p className="whitespace-pre-wrap mb-12 font-light text-gray-100">
          {project.description}
        </p>
        <hr className="h-[1px] w-full bg-white" />
      </div>

        <Tasks tasks={tasks} addTask={addTask} clearTask={clearTask}/>

    </div>
  );
};

export default Project;
