//tools import
import React from "react";
import { Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//components import
import Route from "./route";
import MoviePage from "../pages/moviePage";
import LoginPage from "../pages/loginPage";
import RegisterPage from "../pages/registerPage";
import HomePage from "../pages/homePage";
import TopicPage from "../pages/topicPage";
import SearchPage from "../pages/searchPage";
import ForumPage from "../pages/forumPage";
import UserPage from "../pages/userPage"

const Routes = () => {
  return (
    <>
      <ToastContainer />
      <AnimatePresence>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} isSign />
          <Route exact path="/register" component={RegisterPage} isSign />
          <Route exact path="/forum" component={ForumPage} />
          <Route exact path="/user" component={UserPage} isPrivate />
          <Route exact path="/topic" isPrivate component={TopicPage} />
          <Route exact path="/movie" component={MoviePage}/>
          <Route exact path="/search" component={SearchPage} />
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default Routes;
