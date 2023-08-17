import { useOutletContext } from "react-router"
export default function HostVanPricing() {
    const { currentVan } = useOutletContext()

    return (
        <h3>${currentVan[0].price}</h3>
    )
}