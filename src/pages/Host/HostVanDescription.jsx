import { useOutletContext } from "react-router-dom";

export default function HostVanDescription() {
    const { currentVan } = useOutletContext()
    return (
        <section>
            <h4>Name: {currentVan[0].name}</h4>
            <h4>Category: {currentVan[0].type}</h4>
            <h4>Description: {currentVan[0].description}</h4>
            <h4>Visibility: public</h4>
        </section>

    )
}