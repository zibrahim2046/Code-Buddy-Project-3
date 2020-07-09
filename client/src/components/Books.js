import React, { Component } from "react";
import BookSaveBtn from "../components/BookSaveBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { connect } from "react-redux";
import { addBook } from "../actions/bookActions";



class Books extends Component {

  state = {
    books: [],
    savedBooks: [],
    search: "",
    book: [],
    title: '',
    author: '',
    synopsis: '',
    link: ''

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

         const newBook = {
            
             title: book.title,
             author: book.author,
             synopsis: book.synopsis,
             link: book.link,
         }

        this.props.addBook(newBook);
    //   })
    //   .catch((err) => console.log(err));
  };


  handleFormSubmit = (event) => {

    this.searchBooks(this.props.topic);
  };

  render() {
    return (
      <Container fluid>
        <br />
        <br />
        {this.state.books.length ? (
          <List>
            {this.state.books.map((book, index) => (
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
                          id={book.id}
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
                    {book.volumeInfo.description}
                    {/* {book.volumeInfo.subtitle} */}
                  </p>
                </div>
              </ListItem>
            ))}
          </List>
        ) : (
          <h3>No Books</h3>
        )}
      </Container>
    );
  }
}



// Books.propTypes = {
//     // saveBook: PropTypes.func.isRequired,
//     book: PropTypes.object.isRequired
// }

const mapStateToProps = (state) => ({
    book: state.book
    // book: book
})

export default connect(mapStateToProps, { addBook })(Books);

