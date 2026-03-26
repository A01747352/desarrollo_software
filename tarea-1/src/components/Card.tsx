import Image from './Image'

const Card = (props: { info: {image: string; book_title: string; author: string; publication_year: number } }) => {
    return (
        <article className="card">
            <Image image={props.info.image} />
            <div className="card-info">
                <h3>{props.info.book_title}</h3>
                <p className="author">{props.info.author}</p>
                <p className="year">{props.info.publication_year}</p>
            </div>
        </article>
    );
}

export default Card;
