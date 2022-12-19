import {Link} from "react-router-dom"
import './navbar.css'

export default function Navbar(){
    return <nav className="nav">
        <Link to="/" className="site-title">React Games</Link>
        <ul>
            <li>
                <Link to="/games">Games</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </nav>
}