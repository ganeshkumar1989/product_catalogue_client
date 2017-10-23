import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';

const ProductForm = (props) => {
    return (
        <form className="form form-horizontal col-md-12" id="addProductForm" onSubmit={props.addProduct}>
            <div className="row">
                <h3 className="centerAlign">Add Your Product</h3>
                <div className="col-md-12">
                    <FormGroup>
                        <ControlLabel>Name: </ControlLabel>
                        <FormControl type="text" placeholder="Enter name" name="name"/>
                    </FormGroup>
                </div>
                <div className="col-md-12">
                    <FormGroup>
                        <ControlLabel>Code: </ControlLabel>
                        <FormControl type="text" placeholder="Enter code" name="code"/>
                    </FormGroup>
                </div>
                <div className="col-md-12">
                    <FormGroup>
                        <ControlLabel>Quantity: </ControlLabel>
                        <FormControl type="number" placeholder="Enter quantity" name="quantity"/>
                    </FormGroup>
                </div>
                <div className="col-md-12">
                    <FormGroup>
                        <ControlLabel>Expiry Date: </ControlLabel>
                        <input type="date" className="form-control" name="expiryDate" min={new Date().yyyymmdd()}/>
                    </FormGroup>
                </div>
            </div>
            <FormGroup>
                <Button type="submit" bsStyle="success" bsSize="large" block>Submit</Button>
            </FormGroup>
        </form>
    );
}

export default ProductForm;