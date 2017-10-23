import { connect } from 'react-redux';
import * as productActions from '../actions/productActions';
import Products from '../components/Products';

const mapStateToProps = (state,ownProps) => {
  return {
    mappedProductState: state.productState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    mappedFetchProducts: () => dispatch(productActions.fetchProducts()),
    mappedDeleteProduct: productToDelete => dispatch(productActions.deleteProduct(productToDelete)),
    mappedshowDeleteModal: productToDelete => dispatch(productActions.showDeleteModal(productToDelete)),
    mappedhideDeleteModal: () => dispatch(productActions.hideDeleteModal()),
    mappedEnableProductEdit: (productToEdit) => dispatch(productActions.enableProductEdit(productToEdit)),
    mappedCancelProductEdit: () => dispatch(productActions.cancelProductEdit()),
    mappedEditProduct: productToEdit => dispatch(productActions.updateProduct(productToEdit)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Products);