import PropTypes from 'prop-types';
import React from 'react';
import { FaGlobeAsia, FaGitlab } from 'react-icons/fa';
import { useParams, useHistory } from 'react-router-dom';
import { WrapperNav, NavItem } from './styled';

const listNav = [
  { id: 'dashboard', icon: <FaGlobeAsia />, tooltip: 'Dashboard', path: '/main/dashboard' },
  {
    id: 'gitlab',
    icon: <FaGitlab />,
    tooltip: 'Git lab',
    path: '/main/gitlab',
  },
];

const NavVertical = () => {
  const history = useHistory();
  const params = useParams();
  const changePage = () => {
    if (params.main === 'dashboard') {
      history.push('/');
      return;
    }
    history.push('/main/dashboard');
  };

  return (
    <WrapperNav>
      <div
        className="logo-company"
        onClick={changePage}
        onKeyPress={changePage}
        role="presentation"
      >
        <img src="https://it.viecoi.work/wp-content/uploads/2019/08/kompa-logo.png" alt="logo" />
      </div>

      {listNav.map((item) => {
        return <ItemNav key={item.id} {...item} />;
      })}
    </WrapperNav>
  );
};

export default NavVertical;

const ItemNav = (props) => {
  const { icon, id, path } = props;
  const history = useHistory();
  const { main } = useParams();

  const changePage = () => {
    history.push(path);
  };

  return (
    <NavItem active={id === main} onClick={() => changePage()}>
      <div className="icon-group">{icon}</div>
    </NavItem>
  );
};

ItemNav.propTypes = {
  icon: PropTypes.instanceOf(Object),
  id: PropTypes.string,
  path: PropTypes.string,
};

ItemNav.defaultProps = {
  icon: {},
  id: '',
  path: '/maint/dashboard',
};
