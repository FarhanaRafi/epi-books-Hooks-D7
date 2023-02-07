import { Component, useEffect, useState } from "react";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";
import { Spinner } from "react-bootstrap";

const CommentArea = (props) => {
  // state = {
  //   title: this.props.title,
  //   selectedBookAsin: this.props.selectedBook,
  //   isLoading: true,
  //   comments: [],
  // };

  const [title, setTitle] = useState(props.title);
  const [selectedBookAsin, setSelectedBookAsin] = useState(props.selectedBook);
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    console.log(selectedBookAsin, "comment area");
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          selectedBookAsin,

        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzQ1ZmU3MzczODAwMTUzNzQzNzgiLCJpYXQiOjE2NzUzMzkzNzAsImV4cCI6MTY3NjU0ODk3MH0.RUaBHf7ZH16daFuEprgMywAxgYfNSr4yqo2KY8XjYRM",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();

        // this.setState({
        //   isLoading: false,
        //   comments: data,
        // });
        setIsLoading(false);
        setComments(data);
      } else {
        alert("problem");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // componentDidMount() {
  //   this.fetchComments();
  // }

  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // componentDidUpdate(prevProps, prevState) {
  //   // console.log(this.props, prevProps);

  //   if (prevState.selectedBookAsin !== this.props.book) {
  //     this.setState({
  //       selectedBookAsin: this.props.book,
  //       title: this.props.title,
  //     });
  //     this.fetchComments();
  //   }
  // }
  useEffect(() => {
    setSelectedBookAsin(props.book);
    setTitle(props.title);
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.book]);

  console.log(props, "selected");
  return (
    <div className="bg-white sticky-top">
      {isLoading && <Spinner animation="border" variant="success" />}
      <h5 className="mb-n5 text-center pt-2">
        <strong>{title}</strong>
      </h5>
      <CommentsList
        comments={comments}
        asin={props.asin}
        key={props.asin}
        refresh={fetchComments}
      />
      <AddComment asin={props.book} refresh={fetchComments} />
    </div>
  );
};

export default CommentArea;
