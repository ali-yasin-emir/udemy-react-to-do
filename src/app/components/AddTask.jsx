"use client";

import Input from "./Input";
import Button from "./Button";
import { useRef, useState } from "react";
import Modal from "./Modal";

const AddTask = ({ addTask }) => {
  const [enteredTask, setEnteredTask] = useState("");
  const [warning, setWarning] = useState("");

    const dialog = useRef()

  const handleChange = (e) => {
    setEnteredTask(e.target.value);
  };

  const handleSave = (e) => {
    if (enteredTask.trim() === "") {
      setWarning("Please fill the input field");
      dialog.current.open()
      return;
    }

    setEnteredTask("");
    setWarning("");
    addTask(enteredTask);
  };

  return (
    <>
        <Modal className="px-36 py-12 text-center rounded-lg" ref={dialog}>
            Please fill the input field with text.
        </Modal>
      <div className="flex gap-4 items-center mb-6">
        <Input onChange={handleChange} value={enteredTask} />
        <Button
          onClick={handleSave}
          text="add task"
          className="border-[1px] bg-transparent text-gray-50 font-normal"
        />
        <span>{warning}</span>
      </div>
    </>
  );
};

export default AddTask;
