export function Toggle(props: any) {
  return (
    <div className="bg-white py-5 px-10 rounded-3xl shadow-md flex justify-center w-fit">
      <label className="cursor-pointer flex">
        <input type="checkbox" value="" className="sr-only peer" />
        <span className="peer text-sm select-none pr-4 cursor-pointer transition-all peer-checked:text-red-300">
          {props.title}
        </span>
        <div className="peer peer-checked:after:translate-x-full peer-checked:bg-red-300
          flex items-center w-[46px] h-[25px] bg-grey-400 rounded-full relative outline-none 
          after:flex after:ml-[2px] after:bg-white after:rounded-full after:h-[21px] after:w-[21px] after:transition-all 
          "/>
      </label>
    </div>
  );
};