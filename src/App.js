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
import Register from "./pages/Auth/Register";
import AddPost from "./pages/Posts/AddPost";
import Posts from "./pages/Posts";
import PostDetails from "./pages/Posts/PostDetails";

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <>
      <Header 
        isAuthenticated={isAuthenticated} />
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
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
        <Route  exact path="/addpost" component={AddPost} />
        
      </Switch>
    </>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.login.isAuthenticated,
    isVerifying: state.login.isVerifying
  }
};

export default connect(mapStateToProps)(App);
