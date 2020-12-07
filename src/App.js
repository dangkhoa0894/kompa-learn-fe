import React, { lazy, Suspense } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import WithGlobalStyles from 'styles/global';
import 'utils/string-utils';
import Loading from 'site/user/containers/Loading/LoadingView';
import { message } from 'antd';
// import * as am4core from '@amcharts/amcharts4/core';
// import * as am4charts from '@amcharts/amcharts4/charts';
// import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import RootHome from './site/user/containers/Home';
import Root from './site/user/containers/Root';

// am4core.useTheme(am4themes_animated);
const LoginView = lazy(() => import('site/user/containers/Login'));

const NotFoundPageView = lazy(() => import('site/user/containers/NotFoundPage'));
const RootModel = lazy(() => import('site/user/containers/Root/Model'));
// const RootTrain = lazy(() => import('./site/user/containers/Root/RootTrain'));

const renderLoader = () => <Loading />;
message.config({
  duration: 1,
  maxCount: 3,
  rtl: true,
});
const App = () => {
  return (
    <WithGlobalStyles>
      <Suspense fallback={renderLoader()}>
        <Router>
          <Switch>
            <Redirect exact from="/" to="/home/index" />
            <Route path="/main/:main">
              <Root />
            </Route>
            <Route path="/login">
              <LoginView />
            </Route>
            <Route path="/home/:features">
              <RootHome />
            </Route>
            <Route path="/model/:feature1/:feature2">
              <RootModel />
            </Route>
            <Route path="/model/:feature1">
              <RootModel />
            </Route>
            {/* <Route path="/detail-model/:modelId">
              <RootTrain />
            </Route> */}
            {/* <Route path="/models/:view/:type/:model/:tab/:subMenu">
              <RootTrain />
            </Route> */}

            <Route component={NotFoundPageView} />
          </Switch>
        </Router>
      </Suspense>
    </WithGlobalStyles>
  );
};

export default App;
