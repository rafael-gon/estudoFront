import { AiOutlineArrowUp } from "react-icons/ai"
export function Stats(){
    return(
        <div className="bg-white rounded-3xl flex flex-col items-start gap-3 px-8 py-5">
            <p className="text-[16px] font-semibold">Statistics</p>

            <div className="flex flex-col gap-2">

                <div className="flex items-center gap-3">
                    <p className="text-[28px]">$19840</p>
                    <div className="flex items-center">
                        <p className="text-[#FE805C] text-[16px] font-semibold ">+8.5% </p>
                        <AiOutlineArrowUp  className="text-[#FE805C] text-xs animate-bounce"/>
                    </div>
                </div>
                
                <p className="text-[14px] text-[#AFAFBD]">Compared to ($13850 last year)</p>
            </div>
        </div>
    )
}
