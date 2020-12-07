import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import { useParams, useHistory } from 'react-router-dom';
import { CustomTabs } from './styled';

const { TabPane } = Tabs;

const listTabs = {
  dashboard: {
    key: '1',
    path: '/main/dashboard',
    name: 'Dashboard',
  },
  explore: {
    key: '2',
    path: '/main/explore',
    name: 'Explore',
  },
};

function Header() {
  const { main } = useParams();
  const history = useHistory();
  const [selectedTab, setSelected] = useState('1');

  const changeTab = (value) => {
    setSelected(value);
    const tempTab = Object.keys(listTabs).filter((e) => listTabs[e].key === `${value}`);
    if (tempTab.length > 0) {
      history.push(listTabs[tempTab[0]].path);
    }
  };
  useEffect(() => {
    if (typeof listTabs[main] === 'object') {
      setSelected(listTabs[main].key);
    }
  }, [main]);

  return (
    <CustomTabs onChange={changeTab} activeKey={selectedTab}>
      {Object.values(listTabs).map((e) => {
        return <TabPane tab={<span>{e.name}</span>} key={e.key} />;
      })}
    </CustomTabs>
  );
}

export default Header;
