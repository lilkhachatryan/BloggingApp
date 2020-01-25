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
        <Route path="/login" component={Login} />
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
