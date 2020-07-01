import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { listCategoriesAction } from "../../actions/CategoryActions";
import { listPublishersAction } from "../../actions/PublisherActions";
import { listAuthorsAction } from "../../actions/AuthorActions";
import { listBooksAction } from "../../actions/BookActions";
import { getToken, getUser } from "../../utils/Commons";
import { getUserAction } from "../../actions/UserActions";
import { getClientCartAction } from "../../actions/CartAction";
import { getClientOrdersAction } from "../../actions/OrderAction";

const Start = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadBooks = () => dispatch(listBooksAction());
    const loadAuthors = () => dispatch(listAuthorsAction());
    const loadCategories = () => dispatch(listCategoriesAction());
    const loadPublishers = () => dispatch(listPublishersAction());
    loadBooks();
    loadAuthors();
    loadCategories();
    loadPublishers();
    if (getToken()) {
      const loadUser = () => dispatch(getUserAction({ email: getUser() }));
      const loadShoppingCart = () => dispatch(getClientCartAction());
      const loadOrders = () => dispatch(getClientOrdersAction());
      loadShoppingCart();
      loadUser();
      loadOrders();
    }
  });
  return <div></div>;
};

export default Start;
