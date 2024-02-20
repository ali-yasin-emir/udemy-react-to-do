import Button from "./Button";
import Input from "./Input";

const Project = ({project}) => {

  const formattedDate = new Date(project.date).toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })

  return (
    <div className="flex flex-col gap-12 rounded-lg w-full pt-24 px-12 bg-slate-400">
      <div className="flex flex-col w-[600px]">
        <div className="flex justify-between">
          <h1 className="mb-4 text-4xl font-semibold">{project.title}</h1>
          <Button
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
      <div className="flex flex-col w-[600px]">
        <h1 className="mb-4 text-4xl font-semibold">Tasks</h1>
        <div className="flex gap-4 items-center mb-6">
          <Input />{" "}
          <Button
            text="add task"
            className="border-[1px] bg-transparent text-gray-50 font-normal"
          />
        </div>
        {/* <p className="">This project does not have any tasks yet.</p> */}
        <div className="flex flex-col gap-4 w-full">
          <div className="flex p-4 bg-neutral-300 justify-between items-center">
            <p className="w-full">Learn the basics.</p>
            <span className="cursor-pointer">Clear</span>
          </div>
          <div className="flex p-4 bg-neutral-300 justify-between items-center">
            <p className="w-full">Learn the basics.</p>
            <span className="cursor-pointer">Clear</span>
          </div>
          <div className="flex p-4 bg-neutral-300 justify-between items-center">
            <p className="w-full">Learn the basics.</p>
            <span className="cursor-pointer">Clear</span>
          </div>
          <div className="flex p-4 bg-neutral-300 justify-between items-center">
            <p className="w-full">Learn the basics.</p>
            <span className="cursor-pointer">Clear</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
