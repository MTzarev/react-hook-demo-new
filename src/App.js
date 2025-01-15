import Counter from './components/Counter';
import './App.css';
import {useEffect, useState} from 'react'
function App() {
  let [name, setName] = useState('');
  let [count, setCount] = useState(0)

  useEffect(()=>{
    setTimeout(()=>{
      setName('Fast Click Game')
    }, 1500);
  },[])
  let clicker = ()=>setCount(x=>x+1)
  return(
    <div className="App">
    <h1>{!name? 'Loading... ': name}</h1>
    
    <Counter firstComponent={count}/>
   
    <button onClick={clicker}>+</button>
    </div>
  );
}

export default App;
