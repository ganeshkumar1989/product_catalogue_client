import { connect } from 'react-redux';
import * as appActions from '../actions/appActions';
import * as productActions from '../actions/productActions';
import App from '../components/App';

const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedAppState: state.appState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    mappedToggleAddProduct: () => dispatch(appActions.toggleAddProduct()),
    mappedAddProduct: product => dispatch(productActions.addNewProduct(product))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);