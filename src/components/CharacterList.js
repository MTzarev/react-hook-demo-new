import useFetch from "../hooks/useFetch";
import AuthContext from "./contexts/authContext"; 
import { useContext } from "react";
const CharacterList = () =>{
    const count = useContext(AuthContext)
    const characters = useFetch('https://swapi.dev/api/people');
    
 
 return(
    <>
    <h3>Count: {count}</h3>
        <ul>
{characters.map(x=> <li key={x.name}>{x.name}</li>)}
</ul>
</>
    );
}
export default CharacterList;