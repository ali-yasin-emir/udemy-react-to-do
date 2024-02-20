import AddTask from "./AddTask";
import Modal from "./Modal";

const Tasks = ({ addTask, clearTask, tasks }) => {

    

  return (
    <>
    <Modal>
        Please fill the input field
    </Modal>
      <div className="flex flex-col w-[600px]">
        <h1 className="mb-4 text-4xl font-semibold">Tasks</h1>
        <AddTask addTask={addTask} />
        {tasks.length === 0 && (
          <p className="mb-6">This project does not have any tasks yet.</p>
        )}
        <div className="flex flex-col gap-4 w-full">
          {tasks.length > 0 &&
            tasks.map((task, index) => {
              return (
                <div
                  key={task.id}
                  className="flex p-4 bg-neutral-300 justify-between items-center"
                >
                  <p className="w-full">{task.text}</p>
                  <button
                    onClick={() => clearTask(task.id)}
                    className="cursor-pointer hover:text-red-600"
                  >
                    Clear
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Tasks;
