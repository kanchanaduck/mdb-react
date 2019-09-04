import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BlankPage from './pages/BlankPage';
import APIPage from './pages/APIPage';
import API2Page from './pages/API2Page';
import LoginPage from './pages/LoginPage';
import API3Page from './pages/API3Page';
import FirebasePage from './pages/FirebasePage';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={BlankPage} />
        <Route path='/API' component={APIPage} />
        <Route path='/API2' component={API2Page} />
        <Route path='/Login' component={LoginPage} />
        <Route path='/API3' component={API3Page} />
        <Route path='/Firebase' component={FirebasePage} />
        {/* <Route path='/' exact component={DashboardPage} />
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/tables' component={TablesPage} />
        <Route path='/maps' component={MapsPage} />
        <Route path='/404' component={NotFoundPage} /> */}
      </Switch>
    );
  }
}

export default Routes;
