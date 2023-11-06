// import Bb from"./comp" //isem dial file comp 
// import './App.css';
// import Comp3 from "./comp3";
// import Comp2 from './comp2';
// import UseRef from './UseRef';
import Comp4 from './comp4';


function App() {
  
const funparent=()=>{
  alert("ccc")
}
  return (
    <div className="App">

    <Comp4 gr='fullstack' msg='cc' fparent={funparent}/>
 
    
    </div>
  );
}

export default App;
