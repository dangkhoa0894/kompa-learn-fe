import React, { useState, useEffect } from "react";
import { Drawer } from "antd";
import { ContentMenu } from "./styled";
import { MenuOutlined } from "@ant-design/icons";
import TabMenu from "../TabMenu";
import UserAction from "../UserAction";
import { useRouteMatch } from "react-router-dom";

function MenuMobile(props) {
  const match = useRouteMatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      handleOpen();
    }
    /* eslint-disable */
  }, [match]);

  let isRunBuild = Boolean(match.params.model);
  return (
    <>
      <MenuOutlined onClick={handleOpen} />
      <Drawer
        title="Basic Drawer"
        placement={"top"}
        closable={false}
        onClose={handleOpen}
        visible={open}
        key={"menu"}
      >
        <ContentMenu>
          {!isRunBuild && (
            <div className="action-user tab-menu">
              <TabMenu />
            </div>
          )}

          <div className="action-user">
            <UserAction />
          </div>
        </ContentMenu>
      </Drawer>
    </>
  );
}

export default MenuMobile;
