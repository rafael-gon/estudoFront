import { styled } from '@stitches/react';
import * as SwitchPrimitive from '@radix-ui/react-switch';

const StyledSwitch = styled(SwitchPrimitive.Root, {
    '&[data-state="checked"]': { backgroundColor: '#FE805C' },
});

const StyledThumb = styled(SwitchPrimitive.Thumb, {
    '&[data-state="checked"]': { transform: 'translateX(19px)' },
});

export const Switch = StyledSwitch;
export const SwitchThumb = StyledThumb;

export function Toggle(props: any){
    return(
        <div className='bg-white py-5 px-8 rounded-3xl shadow-md'>
            <div className='flex items-center' >
                <label htmlFor="s1" className="text-red-300 text-sm select-none pr-4 cursor-pointer" >
                    Design System Manager
                </label>
                <Switch defaultChecked id="s1" className='clear-none w-[42px] h-[25px] bg-grey-400 rounded-full relative outline-none '>
                    <SwitchThumb className='block w-[21px] h-[21px] bg-white rounded-full transition-transform translate-x-[2px] will-change-transform' />
                </Switch>
            </div>
        </div>
    )
}