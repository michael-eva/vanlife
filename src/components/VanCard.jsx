import Banner from "./Banner"
export default function VanCard({ img, title, price, banner }) {
    return (
        <div className="van-card">
            <img src={img} alt="van-image" />
            <div className="van-info">
                <p>{title}</p>
                <div className="price">
                    <p>{price}</p>
                    <span>/day</span>
                </div>
            </div>
            <Banner>{banner}</Banner>
        </div>
    )
}