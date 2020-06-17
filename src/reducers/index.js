import { combineReducers } from "redux";
import BookReducer from "./BookReducer";
import AuthorReducer from "./AuthorReducer";
import CategoryReducer from "./CategoryReducer";
import PublisherReducer from "./PublisherReducer";
import AlertReducer from "./AlertReducer";
import LoginReducer from "./LoginReducer";
import SignUpReducer from "./SignUpReducer";
import UserReducers from "./UserReducers";

export default combineReducers({
  alert: AlertReducer,
  book: BookReducer,
  author: AuthorReducer,
  category: CategoryReducer,
  publisher: PublisherReducer,
  login: LoginReducer,
  signup: SignUpReducer,
  user: UserReducers,
});
