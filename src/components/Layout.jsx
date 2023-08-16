import { Outlet } from "react-router-dom";
import NavBar from "./LayoutComponents/NavBar";
import Footer from "./LayoutComponents/Footer"

export default function Layout() {
    return (

        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}