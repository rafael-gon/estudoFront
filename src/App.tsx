import './global.css'
import { Card } from './components/newCard';
import { CreditCard } from './components/CreditCard';
import { Toggle } from './components/Toggle';
import { Subscribe } from './components/Subscribe';
import { Stats } from './components/stats';


export function App() {

  return (
    <div className="h-screen w-screen overflow-y-auto flex justify-center items-center text-center bg-back gap-16">
      <div className='flex flex-col gap-16 items-center'>
        <Card />
        <CreditCard />
        <Stats />
      </div>
      <div className='flex flex-col gap-16 items-center'>
        <Toggle title="Toggle Switch"/>
        <Subscribe />
      </div>
    </div>
  )
}