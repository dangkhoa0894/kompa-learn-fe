import NavVertical from "SRC/components/NavVertical";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AnalysisModel from "SRC/site/user/containers/AnalysisModel";
import { WrapperAnalysisData } from "./styled";

const AnalysisRoot = () => {
  return (
    <WrapperAnalysisData>
      <NavVertical />
      <Switch>
        {/* define-tag */}
        <Route
          exact
          path="/model/analysis/view/:modelId"
          component={AnalysisModel}
        />
        <Route>
          <Redirect to="/pageNotFound" />
        </Route>
      </Switch>
    </WrapperAnalysisData>
  );
};

export default AnalysisRoot;
