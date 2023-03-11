import { useState } from "react";

function BurguerMenu(props: any) {
  const [click, setClick] = useState(false)
  return (
    <div {...props}>
      <div onClick={() => setClick(!click)} className="bg-white rounded-xl shadow-md flex flex-col gap-1 justify-center h-12 w-12 items-center transition-all cursor-pointer hover:brightness-95">
        <div className={`h-1 w-6 transition-all rounded-full ${(click) ? "fixed rotate-45 bg-red-300" : "bg-grey-400"} `} />
        <div className={`h-1 w-8 transition-all rounded-full ${(click) ? "opacity-0" : "bg-grey-400"} `} />
        <div className={`h-1 w-6 transition-all rounded-full ${(click) ? "fixed -rotate-45 bg-red-300" : "bg-grey-400"} `} />
      </div>
    </div>

  )
}

export default BurguerMenu;