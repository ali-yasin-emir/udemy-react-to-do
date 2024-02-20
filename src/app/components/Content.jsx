"use client";

const Content = ({children}) => {

  return (
    <div className="rounded-lg gap-4 w-full flex flex-col pt-24 px-12 bg-slate-400">
     {children}
    </div>
  );
};

export default Content;
