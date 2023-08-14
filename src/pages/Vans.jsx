import VanCard from "../components/VanCard"
import Banner from "../components/Banner"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function Vans() {
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    return (
        <div className="vans-list">
            <div className="filter-options">
                <h3>Explore our van options</h3>
                <ul className="van-options">
                    <li><Banner filter="filter">Simple</Banner></li>
                    <li><Banner filter="filter">Luxury</Banner></li>
                    <li><Banner filter="filter">Rugged</Banner></li>
                    <li>Clear filters</li>
                </ul>
            </div>
            <div className="vans-container">
                {vans.map(van => (
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