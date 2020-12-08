import React from "react";
import { Redirect, Switch, Route, useParams } from "react-router-dom";
import HeaderModule from "SRC/components/HeaderModule";
import CreateModelView from "SRC/site/user/containers/CreateModel";
import ConfigModelRoot from "./Config";
import { ModuleContainer, BodyModule } from "./styled";
import SetupDataRoot from "./SetupData";
import ModifyModelRoot from "./ModifyModel";
import AnalysisRoot from "./AnalysisData";
import ViewDataRoot from "./ViewData";

function ModuleView() {
  const { feature1 } = useParams();

  return (
    <ModuleContainer>
      {(feature1 === "setup" || feature1 === "create") && <HeaderModule />}
      <BodyModule>
        <Switch>
          <Route exact path="/model/create" component={CreateModelView} />
          <Route
            exact
            path="/model/config/:feature2/:modelId"
            component={ConfigModelRoot}
          />
          <Route
            path="/model/setup/:feature2/:modelId"
            component={SetupDataRoot}
          />
          <Route
            path="/model/modify-data/:feature2/:modelId"
            component={ModifyModelRoot}
          />
          <Route
            path="/model/analysis/:feature2/:modelId"
            component={AnalysisRoot}
          />
          <Route
            path="/model/view-data/:feature2/:modelId"
            component={ViewDataRoot}
          />
          <Route>
            <Redirect to="/pageNotFound" />
          </Route>
        </Switch>
      </BodyModule>
    </ModuleContainer>
  );
}

export default ModuleView;
