import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import DOMPurify from "dompurify";
import { fetchArticles } from "../redux/actions";
import CommentsList from "./CommentsList";

class Artilce extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchArticles());
  }

  render() {
    const { error, loading, article } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!article) {
      return <div>Not yet article</div>;
    }

    return (
      <div>
        <h1>{article.title}</h1>
        <strong>
          <Moment format="DD-MM-YYYY HH:mm">{article.date}</Moment>
        </strong>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.text) }}
        />
        <CommentsList comments={article.comments} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  article: state.item,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(Artilce);
