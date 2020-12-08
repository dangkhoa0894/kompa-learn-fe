import React, { lazy, Suspense } from "react";
import "./App.css";
import "antd/dist/antd.css";
import "react-toastify/dist/ReactToastify.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import WithGlobalStyles from "SRC/styles/global";
import "SRC/utils/string-utils";
import Loading from "SRC/site/user/containers/Loading/LoadingView";
import { message } from "antd";
import RootHome from "./site/user/containers/Home";
import Root from "./site/user/containers/Root";

const LoginView = lazy(() => import("SRC/site/user/containers/Login"));

const NotFoundPageView = lazy(() =>
  import("SRC/site/user/containers/NotFoundPage")
);
const RootModel = lazy(() => import("SRC/site/user/containers/Root/Model"));

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
            <Route component={NotFoundPageView} />
          </Switch>
        </Router>
      </Suspense>
    </WithGlobalStyles>
  );
};

export default App;
