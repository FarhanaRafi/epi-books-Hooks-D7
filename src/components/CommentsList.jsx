import { useState } from "react";
import { ListGroup, Alert } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentsList = (props) => {
  // const [comments, setComments] = useState(props.comments);
  // const [elementId, setElementId] = useState(props.asin);
  // const [isLoading, setIsLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [isError, setIsError] = useState(false);

  return (
    <>
      {isError && <Alert variant="danger">Aww snap, we got an error!</Alert>}

      <h5 className="text-center mt-5 review text-danger">
        <strong>Reviews</strong>{" "}
      </h5>
      <ListGroup>
        {props.comments.map((c) => {
          return <SingleComment refresh={props.refresh} comment={c} />;
        })}
      </ListGroup>
    </>
  );
};

export default CommentsList;
