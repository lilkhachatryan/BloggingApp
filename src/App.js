import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Button from 'react-bootstrap/Button';
import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              {/* <Link to="/">Dashboard</Link> */}
            </li>
            <li>
              {/* <Link to="/posts">Posts</Link> */}
            </li>
            <li>
              {/* <Link to="/posts">Posts</Link> */}
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path="/posts">
            <PostList />
          </Route> */}
          {/* <Route path="/">
            <Dashboard />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
