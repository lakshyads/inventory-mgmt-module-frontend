import { Container } from 'semantic-ui-react';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { viewRoutes } from '../utils/pathUtil';

import Header from './components/partials/Header';
import LandingPage from './components/partials/LandingPage';
import CategoryDashboard from './components/categories/CategoryDashboardPage';
import ItemDashboard from './components/items/ItemDashboardPage';

import ItemForm from './components/items/ItemForm';
import CategoryForm from './components/categories/CategoryForm';

import CategoryDetail from './components/categories/CategoryDetail';

const App = (props) => {
  const [isFetch, setIsFetch] = useState(false);
  useEffect(() => {
    if (!isFetch) {
      props.fetchUser();
      setIsFetch(true);
    }
  }, [props, isFetch]);
  return (
    <div>
      <BrowserRouter >
        <Container>
          <Header />
          <Route exact path={viewRoutes.LANDING} component={LandingPage} />
          <Route exact path={viewRoutes.CATEGORY_DASHBOARD} component={(props.auth === false || props.auth == null) ? LandingPage : CategoryDashboard } />
          <Route exact path={viewRoutes.CATEGORY_CREATE} component={(props.auth === false || props.auth == null) ? LandingPage : CategoryForm } />
          <Route exact path={viewRoutes.CATEGORY_DETAIL} component={(props.auth === false || props.auth == null) ? LandingPage : CategoryDetail } />
          <Route exact path={viewRoutes.CATEGORY_EDIT} component={(props.auth === false || props.auth == null) ? LandingPage : CategoryForm } />
          <Route exact path={viewRoutes.ITEM_DASHBOARD} component={(props.auth === false || props.auth == null) ? LandingPage : ItemDashboard } />
          <Route exact path={viewRoutes.ITEM_CREATE} component={(props.auth === false || props.auth == null) ? LandingPage : ItemForm } />
        </Container>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('state', state);
  return state;
}

export default connect(mapStateToProps, actions)(App);

