import React, { Component } from 'react';

import styles from './index.module.scss';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import Loadable from 'react-loadable';

const LoaderComponent = () => {
  return (
    <>
      <div className="container">
        <p>Loading</p>
      </div>
    </>
  )
};

const AsyncHome = Loadable({
  loader: () => import(/* webpackChunkName: 'Home' */'../Home/Home'),
  loading: LoaderComponent
});

const AsyncAbout = Loadable({
  loader: () => import(/* webpackChunkName: 'About' */'../About/About'),
  loading: LoaderComponent,
  delay: 5000
});

const AsyncContact = Loadable({
  loader: () => import(/* webpackChunkName: 'Contact' */'../Contact/Contact'),
  loading: LoaderComponent,
  delay: 5000
});

const AsyncNotFound = Loadable({
  loader: () => import(/* webpackChunkName: 'NotFound' */'../NotFound/NotFound'),
  loading: LoaderComponent
});


class Index extends Component {
  render() {
    console.log('styles123',styles);
    return (
      <div className={styles.app}>
        <Router>
          <div>
            <header className="header container">
              <nav className={styles.navbar}>
                <Link to="/">
                  <span className="navbar-item">Home</span>
                </Link>
                <Link to="/about">
                  <span className="navbar-item">About</span>
                </Link>

                <Link to="/contact">
                  <span className="navbar-item">Contact</span>
                </Link>

                <Link to="/somepage">
                  <span className="navbar-item">404 Page</span>
                </Link>
              </nav>
            </header>
            <Switch>
              <Route exact path="/" component={AsyncHome} />
              <Route path="/about" component={AsyncAbout}/>
              <Route path="/contact" component={AsyncContact}/>
              <Route path="*" component={AsyncNotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default Index;
