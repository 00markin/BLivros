import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getBook } from '../API';
import Loading from '../components/Loading';
import { recordBook } from '../actions';

const mapStateToProps = state => ({
  book: state.book,
});

const mapDispatchToProps = dispatch => ({
  bookRecorder: book => dispatch(recordBook(book)),
});

const Book = props => {
  const { match, bookRecorder, book } = props;
  const { bookId } = match.params;
  const {
    id,
    title,
    authors,
    publisher,
  } = book;

  const similarBooks = book.similar_books || [{ book: [] }];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id.toString() === bookId.toString()) return;
    getBook(bookId)
      .then(
        newBook => {
          bookRecorder(newBook);
        },
      );
  }, [bookId]);

  return (
    <>
      {
        id.toString() !== bookId.toString()
          ? <Loading />
          : (
            <div className="single-page">
              <img src={book.image_url[0]} alt="book cover" />
              <h1>
                {title}
              </h1>
              <h2>
                Autores
              </h2>
              <div className="px-5">
                <ul>
                  {authors[0].author.map(author => (
                    <li key={author.id[0]}>
                      {author.name[0]}
                      <Link to={`/author/${author.id}`} className="more-link">Mais</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <h2>
                Publicações
              </h2>
              <div>
                {publisher}
              </div>
            </div>
          )
      }
    </>
  );
};

Book.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      bookId: PropTypes.string,
    }).isRequired,
  }).isRequired,
  bookRecorder: PropTypes.func.isRequired,
  book: PropTypes.shape({
    image_url: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.number,
    title: PropTypes.arrayOf(PropTypes.string),
    authors: PropTypes.arrayOf(PropTypes.object),
    publisher: PropTypes.arrayOf(PropTypes.string),
    similar_books: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Book);
