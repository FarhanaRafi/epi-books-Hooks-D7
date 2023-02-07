import { Card, Container, CardDeck } from "react-bootstrap";
import { useState } from "react";
// import CommentArea from "./CommentArea";

const SingleBook = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [book, setBook] = useState(props.book);
  const [selected, setSelected] = useState(false);
  // const [asin, setAsin] = useState(props.book.asin);
  // const [isLoading, setIsLoading] = useState(true);

  return (
    <Container>
      <CardDeck>
        <Card
          onClick={(e) => {
            if (selected === true) {
              setSelected(false);
              e.target.classList.remove("selected");
            } else {
              setSelected(true);
              e.target.classList.add("selected");
            }
            props.selectBook(book);
          }}
          // style={{
          //   color: this.state.selected === true ? "red" : "black",
          // }}
        >
          <Card.Img variant="top" src={props.book.img} height={270} />
          <Card.Body>
            <Card.Title className="book-title">{props.book.title}</Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>

      {/* {this.state.selected && <CommentArea asin={this.state.asin} />} */}
      {/* {this.state.selected && <CommentsList asin={this.state.asin} />} */}
    </Container>
  );
};

export default SingleBook;
