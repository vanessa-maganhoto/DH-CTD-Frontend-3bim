import { Link } from "react-router-dom"


export default function Initial(){
    return(
        <div>
            <h1>Initial</h1>
            <Link to="/home">HOME</Link>
            <Link to="/details">Details</Link>
        </div>
    )
}