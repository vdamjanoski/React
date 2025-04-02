const BookCard = ({title, author, genre, available}) => {
    return(
        <div>
            <h3>{title}</h3>
            <p>{author}</p>
            <p>{genre}</p>
            <p>{available ? "Available" : "Not Available"}</p>
        </div>
    )
}
export default BookCard