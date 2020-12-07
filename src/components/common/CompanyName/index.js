import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { ContainCompanyName } from './styled';

const CompanyNameView = (props) => {
  const { color, hasLink } = props;
  return (
    <ContainCompanyName color={color}>
      {hasLink ? (
        <Link className="logo-link" to="/main/dashboard">
          <div className="logo" />
        </Link>
      ) : (
        <div className="logo-link">
          <div className="logo" />
        </div>
      )}
    </ContainCompanyName>
  );
};

CompanyNameView.propTypes = {
  color: PropTypes.string,
  hasLink: PropTypes.bool,
};

CompanyNameView.defaultProps = {
  color: '',
  hasLink: true,
};
export default CompanyNameView;
