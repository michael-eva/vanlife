import VanCard from "../../components/VanCard"
import Banner from "../../components/Banner"
import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"


export default function Vans() {
    const [vans, setVans] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.get("type")

    const filterVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    console.log(<Banner />);
    return (
        <div className="vans-list">
            <div className="filter-options">
                <h3>Explore our van options</h3>
                <div className="van-options">
                    <button onClick={() => setSearchParams({ type: "simple" })}>
                        <Banner filter="filter">Simple</Banner>
                    </button>
                    <button onClick={() => setSearchParams({ type: "luxury" })}>
                        <Banner filter="filter">Luxury</Banner>
                    </button>
                    <button onClick={() => setSearchParams({ type: "rugged" })}>
                        <Banner filter="filter">Rugged</Banner>
                    </button>
                    <button onClick={() => setSearchParams("")}>Clear filters</button>
                </div>
            </div>
            <div className="vans-container">
                {filterVans.map(van => (
                    <Link to={`/vans/${van.id}`} key={van.id}>
                        <VanCard
                            img={van.imageUrl}
                            title={van.name}
                            price={van.price}
                            banner={van.type}>
                        </VanCard>
                    </Link>
                ))}
            </div>
        </div>
    )
}