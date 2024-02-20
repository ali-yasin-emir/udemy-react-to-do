
const Button = ({text, className, ...props}) => {

  return (
    <button {...props} className={`${className} capitalize cursor-pointer w-[100px] h-[50px] text-nowrap rounded-lg bg-slate-600 text-gray-400 font-semibold`} >
      {text}
    </button>
  );
};

export default Button;
