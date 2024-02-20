"use client";

import { useRef, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Modal from "./Modal";
// import Textarea from "./Textarea";

const AddProject = ({ addProject, handleCancel }) => {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const date = useRef();

  // const [projectInfo, setProjectInfo] = useState({
  //  title: projectTitle.current.target.value,
  //   description: projectDescription.current.target.value,
  //   date: projectDate.current.target.value,
  // })

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;

    // validation

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    addProject({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    });
  };

  return (
    <>
      <Modal className="p-12 rounded-lg backdrop:bg-[#00000088]" ref={modal}>
        <h2 className="mb-4 text-red-500">Invalid Input!</h2>
        <p className="mb-2">Oops... looks like you forgot to enter a value.</p>
        <p className="mb-2">Please make sure you provide a valid value for every input field</p>
      </Modal>
      <div className="rounded-lg gap-4 w-full flex flex-col items-center mx-auto pt-24 px-12 bg-slate-400">
        <div className="w-full max-w-[720px]">
          <div className="w-full flex justify-end gap-6">
            <Button
              onClick={handleCancel}
              text="cancel"
              className="bg-transparent text-slate-200"
            />
            <Button
              onClick={handleSave}
              text="save"
              className="bg-slate-900 text-slate-200 "
            />
          </div>
          <div className="flex flex-col gap-6">
            <Input ref={title} type="text" label="title" />
            <Input ref={description} textarea label="description" />
            {/* <Textarea ref={description} label="description" /> */}
            <Input ref={date} type="date" label="due date" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProject;
