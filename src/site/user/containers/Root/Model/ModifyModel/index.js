import React from 'react';
import NavVertical from 'components/NavVertical';
import { Route, Switch, Redirect } from 'react-router-dom';
import DetailModelView from 'site/user/containers/ModifyModel';
import { DetailModelWrapper } from './styled';

const DetailModel = () => {
  return (
    <DetailModelWrapper>
      <NavVertical />
      <Switch>
        {/* define-tag */}
        <Route exact path="/model/modify-data/view/:modelId" component={DetailModelView} />
        <Route>
          <Redirect to="/pageNotFound" />
        </Route>
      </Switch>
    </DetailModelWrapper>
  );
};

export default DetailModel;
