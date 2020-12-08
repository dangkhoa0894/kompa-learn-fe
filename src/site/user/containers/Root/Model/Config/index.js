import React from "react";
import NavVertical from "SRC/components/NavVertical";
import { Route, Switch, Redirect } from "react-router-dom";
import SettingView from "SRC/site/user/containers/Setting/SettingView";
import HistoryVersionView from "SRC/site/user/containers/HistoryVersion";
import { ConfigModelWrapper } from "./styled";

const DetailModel = () => {
  return (
    <ConfigModelWrapper>
      <NavVertical />
      <Switch>
        {/* define-tag */}
        <Route
          exact
          path="/model/config/view/:modelId"
          component={SettingView}
        />
        <Route
          exact
          path="/model/config/history/:modelId"
          component={HistoryVersionView}
        />
        <Route>
          <Redirect to="/pageNotFound" />
        </Route>
      </Switch>
    </ConfigModelWrapper>
  );
};

export default DetailModel;
