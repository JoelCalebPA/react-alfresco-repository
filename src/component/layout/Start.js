import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { listCategoriesAction } from "../../actions/CategoryActions";
import { listPublishersAction } from "../../actions/PublisherActions";
import { listAuthorsAction } from "../../actions/AuthorActions";
import { listBooksAction } from "../../actions/BookActions";
import { getToken, getUser } from "../../utils/Commons";
import { getUserAction } from "../../actions/UserActions";

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
      loadUser();
    }
  });
  return <div></div>;
};

export default Start;
