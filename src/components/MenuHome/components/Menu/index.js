import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Typography, Popover, Button } from 'antd';
import {
  FaAngleDown,
  FaUsers,
  FaThumbsUp,
  FaCreditCard,
  FaBars,
} from 'react-icons/fa';
import {
  ContainMenu,
  ContainItemMore,
  LoginButton,
  ContainMenuMobile,
} from './styled';

const menuHeader = [
  {
    id: 'solution',
    label: 'solution',
    moreItem: [
      {
        id: 'support-teams',
        label: 'For Support Teams',
        pathName: '/home/support-teams',
        icon: <FaUsers />,
      },
      {
        id: 'product-teams',
        label: 'For Product Teams',
        pathName: '/home/product-teams',
        icon: <FaThumbsUp />,
      },
      {
        id: 'developers-teams',
        label: 'For Developers Teams',
        pathName: '/home/developers-teams',
        icon: <FaCreditCard />,
      },
    ],
  },
  {
    id: 'customer',
    label: 'customer',
    pathName: '/home/customer',
  },
  {
    id: 'product',
    label: 'product',
    moreItem: [
      {
        id: 'how-to-works',
        label: 'How to works',
        pathName: '/home/how-to-works',
        icon: <FaUsers />,
      },
      {
        id: 'text-classifiers',
        label: 'Text Classifiers',
        pathName: '/home/text-classifiers',
        icon: <FaThumbsUp />,
      },
      {
        id: 'text-extractors',
        label: 'Text Extractors',
        pathName: '/home/text-extractors',
        icon: <FaCreditCard />,
      },
    ],
  },
  {
    id: 'pricing',
    label: 'pricing',
    pathName: '/home/pricing',
  },
  {
    id: 'resource',
    label: 'resource',
    pathName: '/home/resource',
  },
];

const MenuHomeView = () => {
  const { features } = useParams();
  const history = useHistory();

  const changePage = (item) => {
    if (item.pathName) {
      history.push(item.pathName);
    }
  };

  return (
    <>
      <ContainMenu>
        <ul className="contain-menu">
          {menuHeader.map((item, index) => {
            return (
              <li
                role="menuitem"
                className={`item-menu ${
                  item.id === features && 'active'
                } `}
                key={item.id}
                onClick={() => changePage(item)}
                onKeyPress={() => changePage(item)}
                tabIndex={index}
              >
                {/* eslint-disable-next-line  */}
                <Item {...item} />
              </li>
            );
          })}
        </ul>

        <LoginButton>
          <Button
            type="primary"
            onClick={() => changePage({ pathName: '/login' })}
          >
            Login
          </Button>
        </LoginButton>
      </ContainMenu>
      <ContainMenuMobile>
        <FaBars />
      </ContainMenuMobile>
    </>
  );
};

export default MenuHomeView;

const Item = (props) => {
  return props?.moreItem ? (
    <Popover
      /* eslint-disable-next-line  */
      content={<ItemMore {...props} />}
      trigger="hover"
      className="popover"
      placement="bottom"
    >
      <Typography.Text strong>{props?.label}</Typography.Text>
      <FaAngleDown />
    </Popover>
  ) : (
    <>
      <Typography.Text strong>{props?.label}</Typography.Text>
    </>
  );
};

const ItemMore = (props) => {
  const history = useHistory();
  const changePage = (item) => {
    if (item.pathName) {
      history.push(item.pathName);
    }
  };
  return (
    <ContainItemMore>
      {props?.moreItem.map((item) => {
        return (
          <li
            role="presentation"
            className="item-sub-menu"
            onClick={() => changePage(item)}
            onKeyPress={() => changePage(item)}
          >
            {item.icon}
            <Typography.Text className="label-sub-menu">
              {item.label}
            </Typography.Text>
          </li>
        );
      })}
    </ContainItemMore>
  );
};
