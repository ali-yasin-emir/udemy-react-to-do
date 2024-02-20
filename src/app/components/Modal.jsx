import { forwardRef,  useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(function Modal({ children, ...props }, ref) {
  
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog {...props} ref={dialog}>
      {children}
      <form method="dialog">
        <Button className="mt-6" text="close" />
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
