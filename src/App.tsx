import './global.css'
import { Card } from './components/newCard';
import { CreditCard } from './components/CreditCard';
import { Toggle } from './components/Toggle';
import { Subscribe } from './components/Subscribe';
import { Stats } from './components/stats';


export function App() {

  return (
    <div className="h-screen w-screen flex justify-center items-center text-center bg-back gap-16">
      <div className='flex flex-col gap-16'>
        <Card />
        <CreditCard />
        <Stats />
      </div>
      <div className='flex flex-col gap-16'>
        <Toggle />
        <Subscribe />
      </div>
    </div>
  )
}