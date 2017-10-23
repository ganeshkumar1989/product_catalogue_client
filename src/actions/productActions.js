import { authHeader } from '../helpers/authHeader';
const apiUrl = "http://localhost:3001/api/";

export const addNewProduct = (product) => {
  return (dispatch) => {
    dispatch(addNewProductRequest(product));
    return fetch(apiUrl, {
        method:'post',
        headers: {...authHeader(), 'Content-Type': 'application/json'},
        body: JSON.stringify(product)
    }).then(response => {
        if(response.ok){
            response.json().then(data => {
                if(data.success){
                    dispatch(addNewProductRequestSuccess(data.product, data.message))
                }
                else{
                    dispatch(addNewProductRequestFailed(data.message))
                }
            })
        }
        else{
            response.json().then(error => {
                dispatch(addNewProductRequestFailed(error))
            })
        }
    })
  }
}

export const addNewProductRequest = (product) => {
  return {
    type: 'ADD_NEW_PRODUCT_REQUEST',
    product
  }
}

export const addNewProductRequestSuccess = (product,message) => {
  return {
    type: 'ADD_NEW_PRODUCT_REQUEST_SUCCESS',
    product:product,
    message:message
  }
}
export const addNewProductRequestFailed = (error) => {
  return {
    type: 'ADD_NEW_PRODUCT_REQUEST_FAILED',
    error
  }
}

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
      
    return fetch(apiUrl, {
        method: 'GET',
        headers: authHeader()
    })
    .then(response => {
        if(response.ok){
            response.json().then(data => {
                if(data.success){
                    dispatch(fetchProductsSuccess(data.products,data.message));
                }
                else{
                    dispatch(fetchProductsFailed(data.message));
                }
            })
        }
        else{
            response.json().then(error => {
                dispatch(fetchProductsFailed(error));
            })
        }
    })
  }
}
export const fetchProductsRequest = () => {
  return {
    type:'FETCH_PRODUCTS_REQUEST'
  }
}

export const fetchProductsSuccess = (products,message) => {
  return {
    type: 'FETCH_PRODUCTS_SUCCESS',
    products: products,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchProductsFailed = (error) => {
  return {
    type:'FETCH_PRODUCTS_FAILED',
    error
  }
}

export const deleteProduct = (product) => {
  return (dispatch) => {
    dispatch(deleteProductRequest(product));
      
    return fetch(apiUrl + product.code ,{
        method:'delete',
        headers: authHeader()
    }).then(response => {
        if(response.ok){
            response.json().then(data => {
                if(data.success){
                    dispatch(deleteProductSuccess(data.message));
                }
                else{
                    dispatch(deleteProductFailed(data.message));
                }
            })
        }
        else{
            response.json().then(error => {
                dispatch(deleteProductFailed(error));
            })
        }
    })
  }
}

export const deleteProductRequest = (product) => {
   return {
     type:'DELETE_PRODUCT_REQUEST',
     product
   }
}

export const deleteProductSuccess = (message) => {
  return {
    type:'DELETE_PRODUCT_SUCCESS',
    message:message
  }
}

export const deleteProductFailed = (error) => {
  return {
    type:'DELETE_PRODUCT_FAILED',
    error
  }
}

export const showDeleteModal = (productToDelete) => {
  return {
    type:'SHOW_DELETE_MODAL',
    product:productToDelete
  }
}

export const hideDeleteModal = () => {
  return {
    type:'HIDE_DELETE_MODAL'
  }
}

export const enableProductEdit = (productToEdit) => {
  return {
    type:'ENABLE_PRODUCT_EDIT',
    product:productToEdit
  }
}

export const cancelProductEdit = () => {
  return {
    type:'CANCEL_PRODUCT_EDIT'
  }
}

export const updateProduct = (product) => {
  return (dispatch) => {
    dispatch(updateProductRequest(product));
      
    return fetch(apiUrl ,{
        method:'put',
        headers: {...authHeader(), 'Content-Type': 'application/json'},
        body: JSON.stringify(product)
    }).then(response => {
        if(response.ok){
            response.json().then(data => {
                if(data.success){
                    dispatch(updateProductSuccess(data.product, data.message));
                }
                else{
                    dispatch(updateProductFailed(data.message));
                }
            })
        }
        else{
            response.json().then(error => {
                dispatch(updateProductFailed(error));
            })
        }
    })
  }
}

export const updateProductRequest = (product) => {
   return {
     type:'UPDATE_PRODUCT_REQUEST',
     product
   }
}

export const updateProductSuccess = (product, message) => {
  return {
    type:'UPDATE_PRODUCT_SUCCESS',
    product:product,
    message:message
  }
}

export const updateProductFailed = (error) => {
  return {
    type:'UPDATE_PRODUCT_FAILED',
    error
  }
}