import React from "react";
import { Redirect, Switch, Route, useParams } from "react-router-dom";
import StepBarView from "SRC/components/common/StepBar";
import UploadFileView from "SRC/site/user/containers/Upload";
import ChooseTextView from "SRC/site/user/containers/ChooseTextImport/ChooseTextView";
import DefineTagsView from "SRC/site/user/containers/DefineTags/DefineTagsView";
import TrainDataView from "SRC/site/user/containers/TrainTagData/TrainTagDataView";

import { SetupDataContainer, BodyModule } from "./styled";

const steps = [
  {
    id: "upload-file",
    title: "Upload File",
  },
  { id: "define-tag", title: "Define Tag" },

  {
    id: "train",
    title: "Training",
  },
];

const currentStep = {
  upload: 0,
  column: 0,
  defineTag: 1,
  train: 2,
};

function ModuleView() {
  const { feature2 } = useParams();
  return (
    <SetupDataContainer>
      <div className="step-bar">
        <StepBarView steps={steps} currentStep={currentStep[feature2]} />
      </div>
      <BodyModule>
        <Switch>
          {/* define-tag */}
          <Route
            exact
            path="/model/setup/upload/:modelId"
            component={UploadFileView}
          />
          <Route
            exact
            path="/model/setup/column/:modelId"
            component={ChooseTextView}
          />
          <Route
            exact
            path="/model/setup/defineTag/:modelId"
            component={DefineTagsView}
          />
          <Route
            exact
            path="/model/setup/train/:modelId"
            component={TrainDataView}
          />

          <Route>
            <Redirect to="/pageNotFound" />
          </Route>
        </Switch>
      </BodyModule>
    </SetupDataContainer>
  );
}

export default ModuleView;
