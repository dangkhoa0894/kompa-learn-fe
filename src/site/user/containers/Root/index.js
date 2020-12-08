import React, { useEffect } from "react";
import { Redirect, Switch, Route, useHistory } from "react-router-dom";
import NavVertical from "SRC/components/NavVertical";
import { useQuery } from "@apollo/client";
import { ME } from "SRC/graphql/User/Query";
import { ERROR_CODE } from "SRC/resource/string";
import { WrapperHome } from "./styled";
import Loading from "../Loading/LoadingView";
import DashBoardView from "../Dashboard";

function HomeView() {
  const { data, loading } = useQuery(ME);
  const history = useHistory();
  useEffect(() => {
    if (!loading) {
      if (data?.me?.statusCode === ERROR_CODE.SUCCESS) {
        history.push("/main/dashboard");
        return;
      }
      history.push("/login");
    }
  }, [loading]);
  return (
    <WrapperHome>
      {loading ? (
        <Loading mode="panel" />
      ) : (
        <>
          <NavVertical />
          <Switch>
            <Route exact path="/main/dashboard" component={DashBoardView} />
            <Route>
              <Redirect to="/pageNotFound" />
            </Route>
          </Switch>
        </>
      )}
    </WrapperHome>
  );
}

export default HomeView;
