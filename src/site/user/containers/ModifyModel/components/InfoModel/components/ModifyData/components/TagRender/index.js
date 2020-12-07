import PropTypes from 'prop-types';
import React from 'react';
import { Tag } from 'antd';
import { TagRenderCss } from './styled';

function TagRender(props) {
  const { label, closable, onClose, onRemoveItem } = props;
  const removeItem = () => {
    onRemoveItem();
    onClose();
  };
  return (
    <TagRenderCss>
      <Tag closable={closable} onClose={removeItem} style={{ marginRight: 3 }}>
        <span className="label-tag-render">{label}</span>
      </Tag>
    </TagRenderCss>
  );
}

TagRender.propTypes = {
  closable: PropTypes.bool,
  label: PropTypes.string,
  onClose: PropTypes.func,
  onRemoveItem: PropTypes.func,
};
TagRender.defaultProps = {
  closable: false,
  label: '',
  onClose: () => {},
  onRemoveItem: () => {},
};

export default TagRender;
