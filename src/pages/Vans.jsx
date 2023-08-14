import VanCard from "../components/VanCard"
import Banner from "../components/Banner"
export default function Vans() {


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
                <VanCard img="image" title="image title" price="$60" banner="Simple"></VanCard>
                <VanCard img="image" title="image title" price="$99" banner="Luxury"></VanCard>
                <VanCard img="image" title="image title" price="$99" banner="Luxury"></VanCard>
                <VanCard img="image" title="image title" price="$99" banner="Luxury"></VanCard>
            </div>
        </div>
    )
}