import { Link } from "react-router-dom"

export default function GamesList() {
    return(
    <>
        <h1>Games</h1>
        <ul>
            <li>
                <Link to="/games/memory">Memory</Link>
            </li>
        </ul>
    </>
    )
}