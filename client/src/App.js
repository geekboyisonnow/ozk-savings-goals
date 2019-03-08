import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Title from './Title';
import Navigation from './Navigation';
import Home from './Home';
import Challenge from './Challenge';
import Edit from './Edit';
import Create from './Create';
import Progress from './Progress';
import Footer from './Footer';
import Error from './Error';
import './App.css';
import axios from 'axios'
import auth from './auth'
import history from './history'
import Login from './login'
import Logout from './logout'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = null;
  }

  componentWillMount() {
    if (auth.isAuthenticated()) {
      axios.defaults.headers.common = {
        Authorization: auth.authorizationHeader()
      }
    }
  }

  render() {
    return (
      <Router history={history}>
        <>
          <Route path="/login" render={() => auth.login()} />
          <Route
            path="/logout"
            render={() => {
              auth.logout()
              return <>You Have Logged Out!</>
            }}
          />
          <Route path="/callback" render={() => {
            auth.handleAuthentication(() => {
              // NOTE: Uncomment the following lines if you are using axios
              //
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
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/logout" component={Logout} />
              <Route exact path="/" component={Home} />
              <Route path="/create" component={Create} />
              <Route path="/edit" component={Edit} />
              <Route path="/progress" component={Progress} />
              <Route path="/challenge" component={Challenge} />
              <Route component={Error} />
            </Switch>
            <Footer />
          </div>
        </>
      </Router>
    );
  }
}

export default App;
