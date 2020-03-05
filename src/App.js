import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import { connect } from "react-redux";
import Login from './pages/Auth/Login/index';
import Profile from './pages/Profile';
import ProtectedRoute from './ProtectedRoute';
import './assets/styles/main.scss';
import Header from './components/layout/Header';
import PostList from './pages/Posts';
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Register from "./pages/Auth/Register";
import AddPost from "./pages/Posts/AddPost";
import Posts from "./pages/Posts";
import PostDetails from "./pages/Posts/PostDetails";


function App(props) {
  const { isAuthenticated, isVerifying, user } = props;
  return (
    <>
      <Header 
        isAuthenticated={isAuthenticated}
        user={user}/>
        <Footer/>
      <Switch>
        <ProtectedRoute
          exact
          path="/"
          component={Profile}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        />
        <ProtectedRoute
            path="/posts"
            component={PostList}
            isAuthenticated={isAuthenticated}
            isVerifying={isVerifying}
        />
        <ProtectedRoute
            path="/post/:id"
            component={PostDetails}
            isAuthenticated={isAuthenticated}
            isVerifying={isVerifying}
        />
        {/* <ProtectedRoute
            path="/addpost"
            component={AddPost}
        /> */}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
        <Route path="/addpost" component={AddPost} />
        <Route exact path="/posts" component={Posts} />
      </Switch>
    </>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.login.isAuthenticated,
    isVerifying: state.login.isVerifying,
    user: state.login.user
  }
};

export default connect(mapStateToProps)(App);
