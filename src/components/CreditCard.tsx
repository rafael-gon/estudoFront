import { Visa } from "../img/Visa";
import { BiPlus } from 'react-icons/bi';

export function CreditCard(){
    return(
        <div className="flex flex-col gap-2">
            <button className="w-72 rounded-3xl p-6 bg-red-300 text-white gap-3 hover:brightness-95 shadow-md transition-all">
                <div className="flex flex-col text-start justify-start">
                    <p className="font-semibold">Andrew Mamontov</p>
                    <p className="opacity-50">**** **** 6162</p>
                </div>
                <div className="flex justify-between text-center items-center">
                    <strong>09/21</strong>
                    <Visa />
                </div>
            </button>

            <button className="flex gap-7 text-center items-center w-72 px-7 py-2 bg-white rounded-full hover:brightness-95 shadow-md transition-all">
                <BiPlus/>
                add new card
            </button>


        </div>
    )
}