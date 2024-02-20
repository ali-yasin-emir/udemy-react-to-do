
const Textarea = ({label, ...props}) => {
  return (
    <div className="flex flex-col gap-1" {...props}>
      <label className="uppercase text-gray-200 font-semibold text-sm">{label}</label>
        <textarea name="" id="" cols="30" rows="10" className="resize-none w-full bg-gray-200 rounded-lg p-2 text-gray-600 font-semibold"/>
    </div>
  );
};

export default Textarea;
