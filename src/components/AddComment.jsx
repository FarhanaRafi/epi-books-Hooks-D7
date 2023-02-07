import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddComment = (props) => {
  // state = {
  //   review: {
  //     comment: "",
  //     rate: 1,
  //     elementId: this.props.asin,
  //   },
  // };

  const [review, setReview] = useState({
    comment: "",
    rate: 1,
    elementId: props.asin,
  });

  const sendComment = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",

        {
          method: "POST",
          body: JSON.stringify(review),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzQ1ZmU3MzczODAwMTUzNzQzNzgiLCJpYXQiOjE2NzUzMzkzNzAsImV4cCI6MTY3NjU0ODk3MH0.RUaBHf7ZH16daFuEprgMywAxgYfNSr4yqo2KY8XjYRM",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setReview({
          comment: "",
          rate: 1,
        });
        props.refresh();
        toast.success("Comment Added Successfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // componentDidMount() {
  //   // this.sendComment();
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.asin !== prevProps.asin) {
  //     this.setState({
  //       review: {
  //         comment: "",
  //         rate: 1,
  //         elementId: this.props.asin,
  //       },
  //     });
  //   }
  // }

  useEffect(() => {
    setReview({
      comment: "",
      rate: 1,
      elementId: props.asin,
    });
  }, [props.asin]);

  return (
    <>
      <ToastContainer className="mt-5" />
      <Form
        className="px-4 form1"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("form is submitting...", e);
          sendComment();
        }}
      >
        <Form.Group>
          <Form.Label>
            <strong>Add a Comment</strong>
          </Form.Label>
          <Form.Control
            as="textarea"
            className="bg-secondary text-white"
            rows={3}
            // value={this.props.selectedValueFromApp}
            value={review.comment}
            onChange={(e) => {
              console.log(e, "event");
              e.preventDefault();
              // this.setState({
              //   review: {
              //     ...this.state.review,
              //     comment: e.target.value,
              //   },
              // });
              setReview({
                ...review,
                comment: e.target.value,
              });
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control
            className="bg-secondary text-white"
            as="select"
            // value={this.props.selectedValueFromApp}
            value={review.rate}
            onChange={(e) => {
              e.preventDefault();
              setReview({
                ...review,
                rate: e.target.value,
              });
              // this.setState({
              //   review: {
              //     ...this.state.review,
              //     rate: e.target.value,
              //   },
              // });
            }}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit" className="mb-3 ml-5">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default AddComment;
