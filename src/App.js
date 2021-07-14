import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router';
import { connect } from 'react-redux';
import Home from './pages/Home';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
      </Switch>
    );
  }
}

// const mapStateToProps = (state) => ({
//   logInfo: state.pageReducer.logged,
// })

// const mapDispatchToProps = (dispatch) => ({
//   logoff: () => dispatch(logoffAction())
// })

export default connect(null, null)(App);
