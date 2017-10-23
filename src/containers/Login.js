import { connect } from 'react-redux';
import * as userActions from '../actions/userActions';
import Login from '../components/Login';
import { withRouter } from 'react-router'

const mapStateToProps = (state) => {
  return {
    mappedUserState:state.userState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    mappedSubmit: () => dispatch(userActions.submit()),
    mappedChangeInput: (name, value) => dispatch(userActions.changeInput(name, value)),
    mappedLogin: (username, password) => dispatch(userActions.login(username, password))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Login));