import './App.css';
import DemoComponent from './compos/DemoComponent';
import ProfilePic from './images/bond.jpg';

function App() {
  return (
    <div className="App">    
      <DemoComponent name="zena" age='35'>
        <p>I am a web developer</p>
        <p>I am from HP</p>
        <img src={ProfilePic} alt=""></img>
      </DemoComponent>
    </div>
  );
}

export default App;
