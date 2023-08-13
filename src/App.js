import './App.css';
import { ArrComponent } from './compos/ArrComponent';
//import Employee from './compos/Employee';
//import DemoComponent from './compos/DemoComponent';
//import EmployeeList from './compos/EmployeeList';
//import ProfilePic from './images/bond.jpg';

function App() {
  return (
    <div className="App">    
      {/* <DemoComponent name="zena" age='35'>
        <p>I am a web developer</p>
        <p>I am from HP</p>
        <img src={ProfilePic} alt=""></img>
      </DemoComponent> */}
      {/* <EmployeeList /> */}
      {/* <Employee /> */}
      <ArrComponent />
    </div>
  );
}

export default App;
