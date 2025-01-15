import { useContext } from "react";
import AuthContext from "./contexts/authContext";
const Counter = ()=>{
const count = useContext(AuthContext)
    return (
        count<5
?<h2>{count}</h2>
:null
    )
}
export default Counter;