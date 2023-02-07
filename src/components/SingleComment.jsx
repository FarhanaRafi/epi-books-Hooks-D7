import { Component } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import StarRatings from "react-star-ratings";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleComment = (props) => {
  const deleteComment = async (commentId) => {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + commentId,

      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzQ1ZmU3MzczODAwMTUzNzQzNzgiLCJpYXQiOjE2NzUzMzkzNzAsImV4cCI6MTY3NjU0ODk3MH0.RUaBHf7ZH16daFuEprgMywAxgYfNSr4yqo2KY8XjYRM",
        },
      }
    );

    if (!res.ok) {
      toast.error("Something went wrong");
    } else {
      toast.success("Deleted successfully");
      props.refresh();
    }
  };

  return (
    <>
      <ToastContainer className="mt-5" />
      <ListGroup.Item key={props.comment._id}>
        <strong className="text-danger">{props.comment.author}</strong> <br />
        {props.comment.comment}
        <br></br>
        {/* Rating: {this.props.comment.rate} */}
        <StarRatings
          rating={props.comment.rate}
          numberOfStars={5}
          name="rating"
          starDimension="15px"
          starRatedColor="red"
        />
        <Button
          variant="light"
          className="ml-5"
          onClick={(e) => {
            e.preventDefault();
            deleteComment(props.comment._id);
          }}
        >
          <AiFillDelete />
        </Button>
      </ListGroup.Item>
    </>
  );
};

export default SingleComment;
