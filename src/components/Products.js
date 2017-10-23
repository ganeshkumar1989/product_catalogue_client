import React from 'react';
import { Alert,Glyphicon,Button,Modal,FormControl } from 'react-bootstrap';
import { Link } from 'react-router';

export default class Products extends React.Component {
    constructor(props){
        super(props);
        this.hideDeleteModal = this.hideDeleteModal.bind(this);
        this.confirmDeleteProduct = this.confirmDeleteProduct.bind(this);
    }
    
    componentWillMount(){
        this.props.mappedFetchProducts();
    }
    
    hideDeleteModal(){
        this.props.mappedhideDeleteModal();
    }
    
    showDeleteModal(productToDelete){
        this.props.mappedshowDeleteModal(productToDelete);
    }
    
    confirmDeleteProduct(){
        this.props.mappedDeleteProduct(this.props.mappedProductState.productToDelete);
    }
    
    enableProductEdit(productToEdit){
        this.props.mappedEnableProductEdit(productToEdit);
    }
    
    cancelProductEdit(){
        this.props.mappedCancelProductEdit();
    }
    
    updateProduct(productToUpdate){
        const name = document.getElementById('editProductName').value;
        const quantity = document.getElementById('editProductQuantity').value;
        const expiryDate = document.getElementById('editProductExpiryDate').value;
        if(name !== ""  && quantity !== "" && expiryDate !== ""){
            var formData = {
                name: name,
                code: productToUpdate.code,
                quantity: quantity,
                expiryDate: new Date(expiryDate).toISOString()
            };
            this.props.mappedEditProduct(formData);
        }
        else{
            return ;
        }
    }
    
    render(){
        const productState = this.props.mappedProductState;
        const products = productState.products;
        
        const getProductRow = (product, view, index) => {
            return (
                <tr key={index}>
                    <td>{product.name}</td>
                    <td>{product.code}</td>
                    <td className={(product.quantity<10? 'danger': (product.quantity<30? 'warning': 'success'))}>{product.quantity}</td>
                    <td>{new Date(product.expiryDate).toLocaleDateString()}</td>
                    <td className="textCenter">
                        <Button onClick={() => this.enableProductEdit(product)} bsStyle="info" bsSize="xsmall"><Glyphicon glyph="pencil" /></Button>
                    </td>
                    <td className="textCenter">
                        <Button onClick={() => this.showDeleteModal(product)} bsStyle="danger" bsSize="xsmall"><Glyphicon glyph="trash" /></Button>
                    </td>
                </tr>
            );
        }
    
        const getProductRowInEdit = (product, view, index) => {
            return (
                <tr key={index}>
                    <td>
                        <FormControl id="editProductName" type="text" name="name" defaultValue={product.name} />
                    </td>
                    <td>{product.code}</td>
                    <td>
                        <FormControl id="editProductQuantity" type="number" name="quantity" defaultValue={product.quantity} />
                    </td>
                    <td>
                        <input id="editProductExpiryDate" type="date" className="form-control" name="expiryDate" defaultValue={new Date(product.expiryDate).yyyymmdd()} min={new Date().yyyymmdd()} />
                    </td>
                    <td className="textCenter">
                        <Button onClick={() => this.updateProduct(product)} bsStyle="success" bsSize="xsmall" style={{marginTop: 5}}>Save</Button>
                    </td>
                    <td className="textCenter">
                        <Button onClick={() => this.cancelProductEdit()} bsStyle="danger" bsSize="xsmall" style={{marginTop: 5}}>Cancel</Button>
                    </td>
                </tr>
            );
        }
        
        return(
            <div className="col-md-12">
                {productState.error &&
                    <div className="text-danger">
                        <Glyphicon glyph="exclamation-sign" /> {productState.error.toString()}
                    </div>
                }
                {productState.isFetching &&
                    <div className="text-info">
                        Processing...
                    </div>
                }
                <h3 className="centerAlign">Products</h3>
                {!products && productState.isFetching &&
                <p>Loading products....</p>
                }
                {products.length <= 0 && !productState.isFetching &&
                <p>No Products Available. Add A Product to List here.</p>
                }
                {products && products.length > 0 && !productState.isFetching &&
                <table className="table booksTable">
                    <thead>
                        <tr>
                            <th className="col-md-3">Product</th>
                            <th className="col-md-3">Code</th>
                            <th className="col-md-2">Quantity</th>
                            <th className="col-md-2">Expiry Date</th>
                            <th className="textCenter col-md-1"></th>
                            <th className="textCenter col-md-1"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product,i) => {
                                if(productState.productToEdit && productState.productToEdit.code == product.code){
                                    return getProductRowInEdit(product, this, i)
                                }
                                else {
                                    return getProductRow(product, this, i)
                                }                                
                            })
                        }
                    </tbody>
                </table>
                }
                
                {/* Modal for deleting todo */}
                <Modal show={productState.showDeleteModal} onHide={this.hideDeleteModal} container={this} aria-labelledby="contained-modal-title">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">Delete Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {productState.productToDelete && !productState.error && !productState.isFetching &&
                            <Alert bsStyle="warning">
                                Are you sure you want to delete <strong>{productState.productToDelete.name} ({productState.productToDelete.code}) </strong> ?
                            </Alert>
                        }
                        {productState.productToDelete && productState.error &&
                            <Alert bsStyle="warning">
                                Failed. <strong>{productState.error} </strong>
                            </Alert>
                        }
                        {productState.productToDelete && !productState.error && productState.isFetching &&
                            <Alert bsStyle="success">
                                <strong>Deleting.... </strong>
                            </Alert>
                        }
                        {!productState.productToDelete && !productState.error && !productState.isFetching&&
                            <Alert bsStyle="success">
                                Product <strong>{productState.successMsg} </strong>
                            </Alert>
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        {!productState.successMsg && !productState.isFetching &&
                            <div>
                                <Button onClick={this.confirmDeleteProduct}>Yes</Button>
                                <Button onClick={this.hideDeleteModal}>No</Button>
                            </div>
                        }
                        {productState.successMsg && !productState.isFetching &&
                            <Button onClick={this.hideDeleteModal}>Close</Button>
                        }
                    </Modal.Footer>
                </Modal>                
            </div>
        );
    }
}