import { Card, CardDeck, Container, Row, Col } from "react-bootstrap";
import items from "../book/fantasy.json";

const AllTheBooks = () => {
  return (
    <Container>
      <h2 className="text-center display-5">
        <strong className="heading">Catalog</strong>
      </h2>
      <Row className="mt-3">
        {items.map((item) => {
          return (
            <Col xs={6} md={4} lg={3} key={item.asin}>
              <CardDeck className="mt-3 mb-3 card-hover">
                <Card>
                  <Card.Img variant="top" src={item.img} height={370} />
                  <Card.Body>
                    <Card.Title className="book-title">{item.title}</Card.Title>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">{item.price} $</small>
                  </Card.Footer>
                </Card>
              </CardDeck>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
