import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";


function CommentsList({ comments }) {
  return (
    <React.Fragment>
      <h3>Comments:</h3>
      <ul className="comments">
        {comments.map(comment => (
          <li key={comment.id}>
            <Comment {...{comment: comment}} />
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentsList;
