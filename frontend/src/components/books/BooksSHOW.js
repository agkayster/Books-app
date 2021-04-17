import React, { Component } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'
import StarRatingComponent from 'react-star-rating-component'

class BooksShow extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.getBook()
  }

  getBook() {
    Axios.get(`/api/books/${this.props.match.params.id}`)
      .then((res) => this.setState({ book: res.data }))
      .catch((err) => console.log(err))
  }

  handleDelete(e) {
    console.log(e.target)
    Axios.delete(`/api/books/${this.props.match.params.id}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    }).then(() => this.props.history.push('/api/books'))
  }

  canModify() {
    const { book } = this.state
    return (
      Auth.isAuthenticated() && Auth.getPayload().sub === book.user.id // This ensures that only the person that created the book can edit it //
    )
  }

  render() {
    const { book } = this.state
    console.log(book)
    if (!book) return <h1>Please wait while loading...</h1>

    const currentBook = book.genres.map((genre) => genre.name).join(', ')

    console.log(currentBook)

    return (
      <div className='show'>
        <section className='section show'>
          <div className='container'>
            <div className='columns is-mobile'>
              <div className='column is-full'>
                {book && (
                  <div className='showpage'>
                    <header>
                      <p className='title is-2'>
												Title: {book.title}
                      </p>
                      <hr />
                    </header>

                    <div className='card-image'>
                      <figure className='image-show'>
                        <img
                          src={book.image}
                          alt={book.title}
                        />
                      </figure>
                    </div>
                    <br />

                    <h3>Rating: {book.rating}/5</h3>
                    <StarRatingComponent
                      name='bookRating'
                      editing={false}
                      renderStarIcon={() => (
                        <span>
                          <i className='far fa-paper-plane'></i>
                        </span>
                      )}
                      starColor='yellow'
                      value={book.rating}
                    />
                    <h2 className='subtitle is-4'>
											Author:{' '}
                      {`${book.author.firstname} ${book.author.lastname}`}
                    </h2>
                    <h2 className='subtitle is-4'>
											Genres: {currentBook}
                    </h2>
                    <h2 className='subtitle is-4'>
											Price(£): {book.price}
                    </h2>
                    <h2 className='subtitle is-4'>
											Summary: {book.summary}
                    </h2>
                    {this.canModify() && (
                      <div className='buttons'>
                        <Link
                          className='button'
                          to={`/books/${book.id}/edit`}>
													Edit
                        </Link>
                        <button className='button is-danger'>
													Delete
                        </button>
                      </div>
                    )}
                    <hr />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default BooksShow
