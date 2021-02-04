import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import articles from "./reducers/articles";

export default createStore(articles, applyMiddleware(thunk));
