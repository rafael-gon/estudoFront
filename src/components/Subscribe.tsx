import { GrClose } from 'react-icons/gr';
import { Close } from '../img/Close';

export function Subscribe(){
    return(
        <div className='w-96 py-6 px-8 rounded-3xl bg-red-300 text-white shadow-md'>
            <div className='flex relative'>
                <p className='text-[22px] cursor-default'>Subscribe card</p>
                <button className='text-lg p-0 text-white opacity-60 hover:opacity-100 transition-all absolute top-0 right-0'>
                    <Close />
                </button>
            </div>
            
            <p className='text-start mb-7 cursor-default'>Subscribe card to receive the newsletters or follow news .</p>
            
            <div className=" flex items-center text-center pl-6 bg-white rounded-full">
                <input type="email" placeholder="Type your email" className="text-xs h-4 w-40 text-black outline-none"/>
                <div className="w-[1px] h-8 bg-grey-500"></div>
                <button className="py-4 px-6 text-black">Subscribe</button>
            </div>
        </div>
    )
}