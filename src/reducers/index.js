import { combineReducers } from "redux";
import BookReducer from "./BookReducer";
import AuthorReducer from "./AuthorReducer";
import CategoryReducer from "./CategoryReducer";
import PublisherReducer from "./PublisherReducer";
import AlertReducer from "./AlertReducer";
import LoginReducer from "./LoginReducer";
import SignUpReducer from "./SignUpReducer";
import UserReducers from "./UserReducers";
import RatingReducer from "./RatingReducer";
import CartReducer from "./CartReducer";
import OrderReducer from "./OrderReducer";
import SubscriptionReducer from "./SubscriptionReducer";
import ReportReducer from "./ReportReducer";
import DiscountReducer from "./DiscountReducer";

export default combineReducers({
  alert: AlertReducer,
  book: BookReducer,
  author: AuthorReducer,
  category: CategoryReducer,
  publisher: PublisherReducer,
  login: LoginReducer,
  signup: SignUpReducer,
  user: UserReducers,
  rating: RatingReducer,
  cart: CartReducer,
  order: OrderReducer,
  subscription: SubscriptionReducer,
  report: ReportReducer,
  discount: DiscountReducer,
});
