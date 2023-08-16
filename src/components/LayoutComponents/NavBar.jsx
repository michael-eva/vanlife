import { NavLink, Link } from "react-router-dom"
export default function NavBar() {
    return (
        <div className="navbar">
            <Link to={"/"}> <div className="logo">#VANLIFE</div></Link>
            <ul className="nav-list">
                <NavLink className={({ isActive }) => isActive ? "nav-items-active" : "nav-items"} to="/host"> <li >Host</li></NavLink>
                <NavLink className={({ isActive }) => isActive ? "nav-items-active" : "nav-items"} to="/about"> <li >About</li></NavLink>
                <NavLink className={({ isActive }) => isActive ? "nav-items-active" : "nav-items"} to="/vans-list"><li >Vans</li></NavLink>

            </ul>
        </div>
    )
}