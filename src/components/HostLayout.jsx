import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
    return (
        <>
            <nav className="host-nav">
                {/* end stops the className spilling over on the dashboard link */}
                <NavLink end className={({ isActive }) => isActive ? "host-nav-items-active" : "host-nav-items"} to="/host">Dashboard</NavLink>
                <NavLink className={({ isActive }) => isActive ? "host-nav-items-active" : "host-nav-items"} to="income">Income</NavLink>
                <NavLink className={({ isActive }) => isActive ? "host-nav-items-active" : "host-nav-items"} to="reviews">Reviews</NavLink>
                <NavLink className={({ isActive }) => isActive ? "host-nav-items-active" : "host-nav-items"} to="vans">Vans</NavLink>
            </nav>
            <Outlet />
        </>
    )
}