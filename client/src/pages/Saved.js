import React, { Component } from 'react';
import { Button } from 'reactstrap';
import API from '../utils/API';
import { Col, Row, Container } from '../components/Grid';
import { List, ListItem } from '../components/List';
import { connect } from 'react-redux';
import { getBooks, deleteBook } from '../actions/bookActions';
import PropTypes from 'prop-types';

class Saved extends Component {
    componentDidMount() {
        this.props.getBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then((res) => this.setState({ books: res.data }))
            .catch((err) => console.log(err));
    };

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    };

    render() {
        const { books } = this.props.book;
        return (
            <Container fluid>
                <h2>Saved Books</h2>
                {this.state.books.length ? (
                    //   <h2>Saved Books</h2>
                    <List>
                        {this.state.books.map((book) => (
                            <ListItem key={book._id}>
                                <div className='googlebooks'>
                                    <Row>
                                        <Col size='md-10'>
                                            <a key={book._id + book.id} href={book.link}>
                                                <strong>{book.title}</strong>
                                            </a>
                                            <p>Written by: {book.author.join(', ')}</p>
                                        </Col>
                                        <Col size='md-2'>
                                            <div className='delete-btn'>
                                                <Button
                                                    className='remove-btn'
                                                    color='danger'
                                                    size='small'
                                                    onClick={this.onDeleteClick.bind(this, book._id)}
                                                ></Button>
                                            </div>
                                        </Col>
                                    </Row>
                                    <p>
                                        <img
                                            align='left'
                                            style={{ paddingRight: 10 }}
                                            src={book.thumbnail}
                                            alt='Book'
                                        />
                                        {book.synopsis}
                                    </p>
                                </div>
                            </ListItem>
                        ))}
                    </List>
                ) : (
                    <h3>No Saved Books</h3>
                )}
            </Container>
        );
    }
}

Saved.propTypes = {
    getBooks: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    book: state.book,
});

export default connect(mapStateToProps, { getBooks, deleteBook })(Saved);
