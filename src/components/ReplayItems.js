import React, { Component } from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";

class ReplayItems extends Component {

  renderCommentReplies = replies => {
    const commentReplies = replies.map(replay => {
      let subReplies;
      if (replay.replies && replay.replies.length > 0) {
        subReplies = this.renderCommentReplies(replay.replies)
      }
      return (
        <li key={ replay.id }>
          <Comment {...{comment: replay, subComment: false}} />
          { subReplies }
        </li>
      );
    });

    return (
      <ul>
        { commentReplies }
      </ul>
    )
  }

  render() {
      return (
        <ul className="replies">{this.renderCommentReplies(this.props.replies)}</ul>
      );
  }
}

ReplayItems.propTypes = {
  replies: PropTypes.array.isRequired,
};

export default ReplayItems;
