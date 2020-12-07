import React from 'react';
import { Popover, Typography, Divider, Tooltip } from 'antd';
import { SettingOutlined, CopyOutlined } from '@ant-design/icons';
import { useHistory, useParams, useRouteMatch } from 'react-router-dom';
import { FaPlus, FaUser, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';
import { AvatarUser, TitleContent, ButtonCreate, ActionUser, BodyContent } from './styled';

const Title = (props) => {
  return (
    <TitleContent>
      <Typography.Title level={4}>{props?.username}</Typography.Title>
      <Typography.Text type="secondary">{props?.email}</Typography.Text>
    </TitleContent>
  );
};

function UserAction(props) {
  const history = useHistory();
  const params = useParams();
  const match = useRouteMatch();
  const goCreateModule = () => {
    history.push('/module/choose-type');
  };

  const openSetting = () => {
    if (params.tab !== 'setting') {
      let pathSetting = match.path.replace(':model', params.model);
      pathSetting = pathSetting.replace(':tab', 'setting');
      pathSetting = pathSetting.replace(':type', 'type');
      pathSetting = pathSetting.replace(':subMenu', params.subMenu);
      pathSetting = pathSetting.replace(':view', params.view);
      history.push(pathSetting);
    }
  };

  return (
    <>
      {params.view !== 'explore' &&
        (props?.isCreate ? (
          <ButtonCreate
            type="primary"
            shape="round"
            icon={<FaPlus />}
            size={30}
            onClick={goCreateModule}
          >
            Create Model
          </ButtonCreate>
        ) : (
          <ActionUser>
            <Tooltip placement="bottom" title="Duplicate Model">
              <CopyOutlined />
            </Tooltip>
            {/* eslint-disable-next-line */}
            <div role="menuitem" onClick={openSetting} onKeyPress={openSetting}>
              <Tooltip placement="bottom" title="Setting">
                <SettingOutlined />
              </Tooltip>
            </div>
          </ActionUser>
        ))}
      <Divider type="vertical" style={{ height: 30 }} />
      <Popover
        placement="leftTop"
        //   eslint-disable-next-line
        title={<Title {...props.infoUser} />}
        content={<ContentUser />}
        trigger="click"
      >
        <AvatarUser src={props?.infoUser?.avatar} />
      </Popover>
    </>
  );
}
UserAction.defaultProps = {
  isCreate: true,
  infoUser: {},
};
export default UserAction;
const listAction = [
  {
    id: 1,
    label: 'My Account',
    icon: <FaUser />,
    pathName: '/account/my-account/profile',
  },
  {
    id: 2,
    label: 'Help',
    icon: <FaQuestionCircle />,
    pathName: '/account/my-account/profile',
  },
  {
    id: 3,
    label: 'Logout',
    icon: <FaSignOutAlt />,
    pathName: '/',
  },
];

const ContentUser = () => {
  const history = useHistory();
  const changePage = (data) => {
    if (data.id === 3) {
      localStorage.setItem('refreshToken', '');
      localStorage.setItem('token', '');
    }
    history.push(data.pathName);
  };
  return (
    <BodyContent>
      <div className="item-api">
        <Typography.Title level={4} className="label-api">
          API key
        </Typography.Title>

        <Tooltip placement="top" title="Copy to clipboard">
          <Typography.Title
            level={4}
            className="content-api"
            onClick={
              () => navigator.clipboard.writeText(' fa385791d7ed579bf12a81f48f779038f1ebe7ec')
              //   eslint-disable-next-line
            }
          >
            fa385791d7ed579bf12a81f48f779038f1ebe7ec
          </Typography.Title>
        </Tooltip>
      </div>
      {listAction.map((item) => {
        return (
          <Typography.Text className="item" key={item.id} onClick={() => changePage(item)}>
            {item?.icon}
            {item?.label}
          </Typography.Text>
        );
      })}
    </BodyContent>
  );
};
