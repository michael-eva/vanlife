import { Outlet } from "react-router";
import HostVanNav from "../pages/Host/HostVanNav";
import HostVanDetail from "../pages/Host/HostVanDetail";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

export default function HostVanLayout() {
    const { id } = useParams()
    const [currentVan, setCurrentVan] = useState(null)

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [])
    if (!currentVan) {
        return <h1>Loading...</h1>
    }
    return (
        <>
            <HostVanDetail currentVan={currentVan} />
            <HostVanNav />
            <Outlet context={{ currentVan }} />
        </>
    )
}