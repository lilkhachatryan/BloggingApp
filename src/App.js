import React from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
// import Button from 'react-bootstrap/Button';
import Button from '@material-ui/core/Button';
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

// import configureStore from './store/index';
// const store = configureStore();

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
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
  );
}

const mapStateToProps = state => {
  console.log('state',state)
  return {
    isAuthenticated: state.login.isAuthenticated,
    isVerifying: state.login.isVerifying
  }
}

export default connect(mapStateToProps)(App);
