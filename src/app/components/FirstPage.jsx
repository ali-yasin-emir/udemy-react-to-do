import Button from "./Button";

const FirstPage = ({ createNewProject }) => {
  return (
    <div className="rounded-lg gap-4 flex flex-col pt-24 items-center w-full bg-slate-400">
      <span className="text-[96px]">📝</span>
      <h1 className="text-gray-700 text-2xl font-bold">No Project Selected</h1>
      <p className="pb-6 text-white">
        Select a project or get started with a new one
      </p>

      <Button
        onClick={createNewProject}
        className="text-gray-100 font-light px-4 py-2 w-fit"
        text="Create new project"
      />
    </div>
  );
};

export default FirstPage;
