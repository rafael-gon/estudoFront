import { BiPlus } from 'react-icons/bi';

export function Card(){
    return(
        <div className="w-64 h-72 rounded-3xl bg-blue-300 flex flex-col text-center justify-center items-center gap-8 shadow-md">
            <button className="w-24 h-24 bg-blue-400 text-2xl text-white flex text-center items-center justify-center rounded-full hover:rotate-180 transition-all duration-500">
                <BiPlus/>
            </button>
            <div className="flex flex-col gap-3">
                <p className="text-md text-white cursor-default">Write New Card</p>
                <p className="text-xs text-white text-opacity-50 cursor-default">Your entire product design workflow — connected</p>
            </div>
        </div>
    )
}