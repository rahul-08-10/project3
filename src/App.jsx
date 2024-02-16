import './App.css';
import {Headerfile} from "./components/Navigation/Headerfile";
import {Contactfile}from './components/Contacts/Contactfile';
import Mainfile from './components/Main/Mainfile';
function App() {

  return (
    <div> 
      <Headerfile />
      <Contactfile />
      <Mainfile />
    </div>
  )
}

export default App
