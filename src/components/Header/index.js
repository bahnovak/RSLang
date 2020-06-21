import { connect } from 'react-redux';

import Header from './Header';
import { removeUserData } from '../../redux/actions/creators/sign-in-data';
import { setNavBarState } from '../../redux/actions/creators/navBar-creator';
import { TOKEN } from '../../constants/cookiesNames';

const mapStateToProps = ({ userData: { getUserData, userData } }) => ({
  token: getUserData(TOKEN),
  userData,
});

const mapToDispatch = {
  removeUserData,
  setNavBarState,
};

export default connect(mapStateToProps, mapToDispatch)(Header);
