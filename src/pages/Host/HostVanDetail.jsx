
import { Link } from "react-router-dom"

export default function HostVanDetail({ currentVan }) {
    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan[0].imageUrl} alt="" />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan[0].type}`}
                        >
                            {currentVan[0].type}
                        </i>
                        <h3>{currentVan[0].name}</h3>
                        <h4>${currentVan[0].price}/day</h4>
                    </div>
                </div>
            </div>
        </section>

    )

}