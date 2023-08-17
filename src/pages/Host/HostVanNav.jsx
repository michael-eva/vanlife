import { NavLink } from "react-router-dom"

export default function HostVanNav() {
    return (
        <nav>
            <NavLink end className={({ isActive }) => isActive ? "host-nav-items-active" : "host-nav-items"} to="">Details</NavLink>
            <NavLink className={({ isActive }) => isActive ? "host-nav-items-active" : "host-nav-items"} to="pricing">Pricing</NavLink>
            <NavLink className={({ isActive }) => isActive ? "host-nav-items-active" : "host-nav-items"} to="photos">Photos</NavLink>
        </nav>
    )
}