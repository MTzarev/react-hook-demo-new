import {useState, useEffect} from 'react'

const CharacterList = () =>{
    const [characters, setCharacters] = useState([])
    useEffect(()=>{
        fetch('https://swapi.dev/api/people')
        .then(res=>res.json())
        .then(response=>{
            setCharacters(response.results)
        })
    }, [])
    
     
    return(
        <ul>
{characters.map(x=> <li key={x.name}>{x.name}</li>)}
</ul>
    );
}
export default CharacterList;