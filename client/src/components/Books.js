import React, { Component } from 'react';
import BookSaveBtn from '../components/BookSaveBtn';
import API from '../utils/API';
import { Col, Row, Container } from '../components/Grid';
import { List, ListItem } from '../components/List';
// import { connect } from "react-redux"

class Books extends Component {
    state = {
        books: [],
        savedBooks: [],
        search: '',
    };

    componentDidMount() {
        //   this.handleInputChange();
        this.handleFormSubmit();
    }

    searchBooks = (title) => {
        API.search(title)
            .then((res) => this.setState({ books: res.data.items }))
            .catch((err) => console.log(err));
    };

    saveBook = (book) => {
        API.saveBook(book)
            .then((res) => {
                const currentBook = this.state.books;
                const bookSave = currentBook.filter((book) => book.id !== res.data.id);
                this.setState({
                    savedBooks: bookSave,
                });
            })
            .catch((err) => console.log(err));
    };

    //   handleInputChange = (event) => {
    //     const { name, value } = {topic};
    //     this.setState({
    //       [name]: value,
    //     });
    //   };

    handleFormSubmit = (event) => {
        // event.preventDefault();
        this.searchBooks(this.props.topic);
    };

    render() {
        return (
            <Container fluid>
                {this.state.books.length ? (
                    <List>
                        {/* {this.state.books.map((book, index) => (
              <ListItem key={book.id}>
                <div className="googlebooks">
                  <Row>
                    <Col size="md-10">
                      <a key={"" + index + book.id} 
                      href={book.volumeInfo.infoLink}
                      >
                        <strong>{book.volumeInfo.title}</strong>
                      </a>
                      <p>
                        Written by:{" "}
                        {book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : ["No Author Available"]}
                      </p>
                    </Col>
                    <Col size="md-2">
                      <div className="save-btn">
                        <BookSaveBtn
                          key={"" + index + book.id}
                          btntype="info"
                          onClick={() =>
                            this.saveBook({
                              title: book.volumeInfo.title,
                              author: book.volumeInfo.authors,
                              synopsis: book.volumeInfo.description,
                            //   thumbnail: book.volumeInfo.imageLinks.thumbnail,
                              link: book.volumeInfo.infoLink,
                              _id: book.id,
                            })
                          }
                        >
                          Save
                        </BookSaveBtn>
                      </div>
                    </Col>
                  </Row>
                  <p>
                    {/* <img
                      align="left"
                      style={{ paddingRight: 10 }}
                      src={book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : "#"}
                      alt="Book"
                    /> */}
                        {/* {book.volumeInfo.description} */}
                        {/* {book.volumeInfo.subtitle} */}
                        {/* </p>
                </div>
              </ListItem> */}
                        {/* ))} */}
                    </List>
                ) : (
                    <h3>No Books</h3>
                )}
            </Container>
        );
    }
}

export default Books;
