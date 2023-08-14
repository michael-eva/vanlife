import VanCard from "../components/VanCard"
import Banner from "../components/Banner"
import { useEffect, useState } from "react"

// // { 
// id: "1", 
// name: "Modest Explorer", 
// price: 60, 
// description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", 
// imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", 
// type: "simple" 
// }

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
                <h3 className="filter-header">Explore our van options</h3>
                <ul className="van-options">
                    <li><Banner filter="filter">Simple</Banner></li>
                    <li><Banner filter="filter">Luxury</Banner></li>
                    <li><Banner filter="filter">Rugged</Banner></li>
                    <li>Clear filters</li>
                </ul>
            </div>
            <div className="vans-container">
                {vans.map(van => (
                    <VanCard key={van.id} img={van.imageUrl} title={van.name} price={van.price} banner={van.type}></VanCard>
                ))}
            </div>
        </div>
    )
}