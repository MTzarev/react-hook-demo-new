import Counter from './components/Counter';
import './App.css';
import {useEffect, useState} from 'react';
import CharacterList from './components/CharacterList';
import AuthContext from './components/contexts/authContext'; 


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
    <AuthContext.Provider value={count}>
    <div className="App">
    <h1>{!name? 'Loading... ': name}</h1>
    
    <Counter />
   <CharacterList/>

    <button onClick={clicker}>+</button>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
