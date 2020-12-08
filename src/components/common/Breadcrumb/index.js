import React, { memo } from "react";
import { Typography } from "antd";
import { useParams, useHistory, withRouter } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { useInfoUser } from "SRC/hooks/User";
import { useGetDetailModel } from "SRC/hooks/Model";
import { LinkLogo, ContainerBreadCrumb, BreadcrumbContent } from "./styled";

const titleBreakCrumb = {
  "my-account": "My Account",
};

const rootLabel = {
  dashboard: "Dash Board",
  explore: "Explore",
};

function BreadcrumbView(props) {
  const params = useParams();
  const infoUser = useInfoUser(props);
  const [{ data }] = useGetDetailModel({
    ...props,
    infoUser,
    model: params.model,
  });
  const listCrumb = [
    {
      label: rootLabel[params.view] || "Dash Board",
      href: params.view ? `/main/${params.view}` : "/",
      hover: true,
    },
  ];

  if (params.tab === "setting") {
    listCrumb.push(
      ...[
        {
          label: data.model_name || params.model,
          href: () => {
            return props?.history.goBack();
          },
          hover: true,
        },
        {
          label: params.tab,
          hover: false,
        },
      ]
    );
  } else {
    listCrumb.push({
      label: data.model_name || titleBreakCrumb[params.title] || params.model,
      hover: false,
    });
  }

  const lengthBreadcrumb = listCrumb.length;
  return (
    <ContainerBreadCrumb>
      <LinkLogo
        to={{
          pathname: "/",
        }}
      />
      <BreadcrumbContent>
        {listCrumb.map((e, index) => {
          return (
            <ItemBreadcrumb
              key={e.label}
              //   eslint-disable-next-line
              {...e}
              index={index}
              lengthBreadcrumb={lengthBreadcrumb}
              separator={props?.separator}
            />
          );
        })}
      </BreadcrumbContent>
    </ContainerBreadCrumb>
  );
}

BreadcrumbView.defaultProps = {
  separator: <FaAngleRight />,
};

export default memo(withRouter(BreadcrumbView));

const ItemBreadcrumb = (props) => {
  const history = useHistory();
  const pushPage = (pathName) => {
    if (pathName) {
      if (typeof pathName === "function") {
        pathName();
      } else {
        history.push(pathName);
      }
    }
  };
  return (
    <>
      <Typography.Text
        className={`link-to ${props?.hover && "hover"}`}
        onClick={() => pushPage(props?.href)}
      >
        {props?.label}
      </Typography.Text>
      {props?.index + 1 !== props?.lengthBreadcrumb && (
        <span className="separator">{props?.separator}</span>
      )}
    </>
  );
};
