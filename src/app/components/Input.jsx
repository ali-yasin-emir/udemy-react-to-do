import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, type, textarea, ...props },
  ref
) {
  return (
    <>
      {textarea ? (
        <div className="flex flex-col gap-1">
          <label className="uppercase text-gray-200 font-semibold text-sm">
            {label}
          </label>
          <textarea
            ref={ref}
            {...props}
            name=""
            id=""
            cols="30"
            rows="10"
            className="resize-none w-full bg-gray-200 rounded-lg p-2 text-gray-600 font-semibold"
          />
        </div>
      ) : (
        <div className="flex flex-col gap-1">
          <label className="uppercase text-gray-200 font-semibold text-sm">
            {label}
          </label>
          <input
            ref={ref}
            {...props}
            className="w-full bg-gray-200 rounded-lg p-2 text-gray-600 font-semibold"
            type={type}
          />
        </div>
      )}
    </>
  );
});

export default Input;

{
  /* <div ref={ref} className="flex flex-col gap-1" {...props}>
<label className="uppercase text-gray-200 font-semibold text-sm">{label}</label>
<input
  className="w-full bg-gray-200 rounded-lg p-2 text-gray-600 font-semibold"
  type={type}
/>
</div> */
}
