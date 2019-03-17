import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import Header from './Header';
import Title from './Title';
import Navigation from './Navigation';
import Home from './Home';
import Challenge from './Challenge';
import Edit from './Edit';
import Create from './Create';
import Progress from './Progress';
import Footer from './Footer';
import './App.css';

import Characters from './Characters';

import axios from 'axios'

import auth from './auth'
import history from './history'

class App extends Component {

  componentWillMount() {
    if (auth.isAuthenticated()) {
      axios.defaults.headers.common = {
        Authorization: auth.authorizationHeader()
      }
    }
    // else {
    //   if (!auth.isAuthenticated()) {
    //     history.replace('/home')
    //   }
    // }
  }


  render() {

    console.log('Is the user authenticated', auth.isAuthenticated())

    return (
      <Router history={history}>
        <>
          <Route path="/login" render={() => {
            auth.login()
            return <></>
          }}
          />
          <Route path="/logout" render={() => {
            auth.logout()
            return <></>
          }}
          />
          <Route path="/callback" render={() => {
            console.log('callback route')
            auth.handleAuthentication(() => {
              // Set the axios authentication headers
              axios.defaults.headers.common = {
                Authorization: auth.authorizationHeader()
              }
            })
            return <></>
          }} />
          <div className="header">
            <Header />
            <Title />
          </div>
          <div className="body">
            <Navigation />
            <Route exact path="/" component={Home} />
            <Route path="/characters" component={Characters} />
            <Route path="/home" component={Home} />
            <Route path="/create" component={Create} />
            <Route path="/edit" component={Edit} />
            <Route path="/progress" component={Progress} />
            <Route path="/challenge" component={Challenge} />
            <Footer />
          </div>
        </>
      </Router >
    );
  }
}

export default App;


