import { Link } from "react-router-dom"
export default function NavBar() {
    return (
        <div className="navbar">
            <Link to={"/"}> <div className="logo">#VANLIFE</div></Link>
            <ul className="nav-list">
                <Link to={"/about"}> <li className="nav-items">About</li></Link>
                <Link to={"/vans-list"}><li className="nav-items">Vans</li></Link>

            </ul>
        </div>
    )
}