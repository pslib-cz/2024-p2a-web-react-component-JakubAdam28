
import './App.css'
import PercentView from './components/PercentView'

const changeColor = (num: number) => {
  const color: number = num  * 120;
  return (
    `hsl(${color}, 100%, 35%)`
  )
}

const App = () => {
  let cislo: number = 33;
  return (
    <>
      <PercentView value={cislo} percentvalue = {cislo} max={100} makeColor={changeColor}/>
      <PercentView value={cislo} percentvalue = {cislo} max={200} makeColor={changeColor}/> 
      <PercentView value={cislo} percentvalue = {cislo} max={300} makeColor={changeColor}/>
      <PercentView value={cislo} percentvalue = {cislo} max={100} makeColor={changeColor}/>
      <PercentView value={cislo} percentvalue = {cislo} max={50} makeColor={changeColor}/>
    </>
  )
}
export default App