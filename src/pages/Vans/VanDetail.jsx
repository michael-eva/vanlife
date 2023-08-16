import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Banner from "../../components/Banner"

export default function VanDetail() {
    const { id } = useParams()
    const [van, setVan] = useState()

    useEffect(() => {
        fetch(`/api/vans/${id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))

    }, [id])
    return (
        <div className="van-detail-page">
            {van ? (
                <>
                    <img src={van.imageUrl} alt="" />
                    <div className="van-detail-body">
                        <Banner>{van.type}</Banner>
                        <h2>{van.name}</h2>
                        <span>${van.price}</span><span>/day</span>
                        <p>{van.description}</p>
                        <button>Rent this van</button>
                    </div>
                </>
            ) : <h2>Loading...</h2>}
        </div>
    )
}