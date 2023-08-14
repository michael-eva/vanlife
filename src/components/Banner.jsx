export default function Banner({ children, filter }) {
    return (
        <div className={`banner-${children} banner-${filter}`}>
            {children}
        </div>
    )
}