
const StarRating = ({ rating, maxRating = 5 }) => {
    return (
        <div>
            {[...Array(maxRating)].map((_, index) => (
                <span key={index} style={{ color: index < rating ? "gold" : "gray" }}>
                    ★
                </span>
            ))}
        </div>
    );
};

export default StarRating;