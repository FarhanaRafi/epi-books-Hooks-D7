import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-ui-kit/css/mdb.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import { Container, Row, Col } from "react-bootstrap";
// import AllTheBooks from "./components/AllTheBooks";
import BookList from "./components/BookList";
import CommentArea from "./components/CommentArea";
import { useState } from "react";

const App = (props) => {
  const [review, setReview] = useState({
    comment: "",
    rate: 1,
    elementId: props.asin,
  });
  const [title, setTitle] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

  const changeAppState = (book) => {
    console.log(book);
    setReview(book);
    setSelectedBook(book.asin);
    setTitle(book.title);
  };

  return (
    <div className="body-container">
      <MyNav genre="Fantasy" />
      <Welcome />
      <Container>
        <Row>
          <Col xs={9}>
            <BookList
              selectedValueFromApp={review.elementId}
              selectBook={changeAppState}
            />
          </Col>
          <Col xs={3} className="mt-5 form-container">
            <CommentArea title={title} book={selectedBook} />
          </Col>
          {/* <AllTheBooks /> 
          asin={this.state.asin}*/}
        </Row>
      </Container>
      <MyFooter />
    </div>
  );
};

export default App;
