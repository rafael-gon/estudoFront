import './global.css'
import { Card } from './components/newCard';
import { CreditCard } from './components/CreditCard';
import { Toggle } from './components/Toggle';
import { Subscribe } from './components/Subscribe';
import { Stats } from './components/stats';
import BurguerMenu from './components/burguerMenu';


export function App() {
  return (
    <div className="h-screen w-screen overflow-y-auto flex flex-wrap justify-center items-center p-16 text-center bg-back gap-8">
        <Card />
        <CreditCard />
        <Stats />
        <Toggle title="Toggle Switch"/>
        <Subscribe />
        <BurguerMenu />
    </div>
  )
}