export default function Banner({ children, filter }) {

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const capitalizedChildren = capitalizeFirstLetter(children);
    return (
        <div className={`banner-${children} banner-${filter}`}>
            {capitalizedChildren}
        </div>
    )
}