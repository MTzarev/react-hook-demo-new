import './App.css';
import {useEffect, useState} from 'react'
function App() {
  let [name, setName] = useState('');

  useEffect(()=>{
    setTimeout(()=>{
      setName('Gosho')
    }, 1500);
  },[])
  return(
    <div className="App">
    <h1>{name}</h1>
    </div>
  );
}

export default App;
