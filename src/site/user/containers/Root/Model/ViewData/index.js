import NavVertical from "SRC/components/NavVertical";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ViewDataModel from "SRC/site/user/containers/ViewData";
import { WrapperViewData } from "./styled";

const AnalysisRoot = () => {
  return (
    <WrapperViewData>
      <NavVertical />
      <Switch>
        {/* define-tag */}
        <Route
          exact
          path="/model/view-data/view/:modelId"
          component={ViewDataModel}
        />
        <Route>
          <Redirect to="/pageNotFound" />
        </Route>
      </Switch>
    </WrapperViewData>
  );
};

export default AnalysisRoot;
