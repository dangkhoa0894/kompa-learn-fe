import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import PropTypes from 'prop-types';
import { CustomTabs } from './styled';

const { TabPane } = Tabs;

function TabsPanel(props) {
  const { defaultValue, space, borderBottom, listTabs } = props;
  const [selectedTab, setSeletedTab] = useState(defaultValue);

  const changeTab = (value) => {
    setSeletedTab(value);
    props.getSelected(value);
  };

  useEffect(() => {
    setSeletedTab(defaultValue);
  }, [defaultValue]);

  const tempMargin = space * 16;
  const margin = `0px ${tempMargin}px 0px 0px`;
  return (
    <CustomTabs
      onChange={changeTab}
      activeKey={selectedTab}
      borderbottom={borderBottom}
      margin={margin}
    >
      {Object.values(listTabs).map((e) => {
        return <TabPane tab={<span>{e.name}</span>} key={e.key} />;
      })}
    </CustomTabs>
  );
}
TabsPanel.propTypes = {
  getSelected: PropTypes.func,
  listTabs: PropTypes.instanceOf(Object),
  defaultValue: PropTypes.string,
  borderBottom: PropTypes.string,
  space: PropTypes.number,
};
TabsPanel.defaultProps = {
  listTabs: {},
  defaultValue: 1,
  getSelected: () => {},
  borderBottom: '1px solid #e5e5e5',
  space: 2,
};
export default TabsPanel;
