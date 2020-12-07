import React from 'react';
import { Col, Button, Typography } from 'antd';
import { FaArrowRight } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { ContainButton } from './styled';

const listButton = [
  {
    id: '1',
    label: 'Sign up Free',
    className: ' btn-sign',
    icon: <FaArrowRight />,
    type: 'primary',
    pathName: '/main/dashboard',
  },
  {
    id: '2',
    label: 'Schedule a Demo',
    className: 'btn-schedule',
    pathName: '/main/explore',
  },
];
const ButtonJoin = () => {
  const history = useHistory();
  const changePage = (item) => {
    if (item.pathName) {
      history.push(item.pathName);
    }
  };
  return (
    <ContainButton type="header">
      {listButton.map((item) => {
        return (
          <Col xs={{ span: 24 }} md={{ span: 12 }} className="btn-g" key={item.id}>
            <Button
              type={item.type}
              className={`btn ${item.className}`}
              onClick={() => changePage(item)}
            >
              <Typography.Text>{item.label}</Typography.Text>
              {item.icon && item.icon}
            </Button>
          </Col>
        );
      })}
    </ContainButton>
  );
};

export default ButtonJoin;
