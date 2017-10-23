import React from 'react';
import { Navbar,Nav,NavItem,MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import ProductForm from './ProductForm';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.toggleAddProduct = this.toggleAddProduct.bind(this);
        this.addProduct = this.addProduct.bind(this);
    }
    
    toggleAddProduct(e){
        e.preventDefault();
        this.props.mappedToggleAddProduct();
    }
    
    addProduct(e){
        e.preventDefault();
        const form = document.getElementById('addProductForm');
        if(form.name.value !== ""  && form.code.value !== "" && form.quantity.value !== "" && form.expiryDate.value !== ""){
            var formData = {
                name: form.name.value,
                code: form.code.value,
                quantity: form.quantity.value,
                expiryDate: new Date(form.expiryDate.value).toISOString()
            };
            this.props.mappedAddProduct(formData);
        }
        else{
            return ;
        }
    }
    
    render(){
        const currentPath = window.location.pathname;
        return(
            <div>
                <Navbar inverse  collapseOnSelect className="customNav">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/#">Product Catalogue</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    {!currentPath.includes('login')
                    ? <Navbar.Collapse>
                        <Nav pullRight>
                            <LinkContainer to={{ pathname: '/', query: {  } }} onClick={this.toggleAddProduct}>
                                <NavItem eventKey={1}>Add Product</NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse> 
                    : null }                    
                </Navbar>
                <div className="container">
                    {this.props.mappedAppState.showAddProduct &&
                        <ProductForm addProduct={this.addProduct} />
                    }
                    {this.props.children}
                </div>
            </div>
        );
    }
}