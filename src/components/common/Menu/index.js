import React from 'react';
import { Typography } from 'antd';
import { useParams } from 'react-router-dom';
import { ContainerMenu } from './styled';

function Menu(props) {
  const { subMenu } = useParams();

  return (
    <ContainerMenu>
      {props?.data.map((e, index) => {
        return (
          <div
            key={e.id}
            role="menuitem"
            onClick={() => props?.changePage(e)}
            onKeyDown={() => props?.changePage(e)}
            className={`item-menu ${subMenu === e.id && 'active'}`}
            tabIndex={index}
          >
            <div className="icon">{e.icon}</div>
            <Typography.Text className="text">{e.label}</Typography.Text>
          </div>
        );
      })}
    </ContainerMenu>
  );
}
Menu.defaultProps = {
  data: [],
  changePage: () => {},
};

export default Menu;
