import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
    const { currentVan } = useOutletContext()
    return (
        <section>
            <img width={"100px"} src={currentVan[0].imageUrl} alt="" />
        </section>

    )
}