import Book from "./Book";
import { books } from "../data";

function Discounted() {
    return (
        <section id="recent">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Discounted <span className="purple">Books</span>
                    </h2>
                    <div className="books">
                        {/* filter ritorna gli elementi che sono valutati a true nella callback. */}
                        {books
                        .filter((book) => book.salePrice > 0)
                        .slice(0,8)
                        .map((book) => <Book book={book} key={book.id}/>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Discounted;