import React from "react";
import PageNotFound from "SRC/resource/images/404.gif";
// import Header from "../../../../components/Header";
import { WrapperHome } from "./styled";

function NotFoundPage(props) {
  return (
    <WrapperHome>
      {props?.showHeader && <Header />}
      <div className="img-page">
        <img src={PageNotFound} alt="pageNotFound" />
      </div>
    </WrapperHome>
  );
}
NotFoundPage.defaultProps = {
  showHeader: true,
};
export default NotFoundPage;
