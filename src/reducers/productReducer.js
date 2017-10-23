const INITIAL_STATE = {
    products:[],
    isFetching: false,
    error: null,
    successMsg:null,
    showDeleteModal: false,
    productToDelete: null,
    productToEdit: null,
}
const productReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS_REQUEST':
            return {
                ...currentState,
                products:[],
                isFetching: true,
                error: null,
                successMsg:null,
                showDeleteModal: false,
                productToDelete: null,
                productToEdit: null,
            }
        case 'FETCH_PRODUCTS_SUCCESS':
            return {
                ...currentState,
                products:action.products,
                isFetching: false,
                error: null,
                successMsg:action.message,
                showDeleteModal: false,
                productToDelete: null,
                productToEdit: null,
            }
        case 'FETCH_PRODUCTS_FAILED':
            return {
                ...currentState,
                products:[],
                isFetching: false,
                error: action.error,
                successMsg:null,
                showDeleteModal: false,
                productToDelete: null,
                productToEdit: null,
            }        
        case 'ADD_NEW_PRODUCT_REQUEST':
            return {
                ...currentState,
                products:currentState.products,
                isFetching: true,
                error: null,
                successMsg:null,
                showDeleteModal: false,
                productToDelete: null,
                productToEdit: null,
                newProduct: action.product
            }
        case 'ADD_NEW_PRODUCT_REQUEST_FAILED':
            return {
                ...currentState,
                products:currentState.products,
                isFetching: false,
                error: action.error,
                successMsg:null,
                showDeleteModal: false,
                productToDelete: null,
                productToEdit: null,
                newProduct: null
            }
        case 'ADD_NEW_PRODUCT_REQUEST_SUCCESS':
            return {
                ...currentState,
                products:[...currentState.products, action.product],
                isFetching: false,
                error: null,
                successMsg:action.message,
                showDeleteModal: false,
                productToDelete: null,
                newProduct: action.product
            }
        case 'DELETE_PRODUCT_REQUEST':
            return {
                ...currentState,
                products:currentState.products,
                isFetching: true,
                error: null,
                successMsg:null,
                showDeleteModal: true,
                productToDelete: action.product,
                productToEdit: null,
                newProduct: null
            }
        case 'DELETE_PRODUCT_SUCCESS':
            const filteredProducts = currentState.products.filter((product) => product.code !== currentState.productToDelete.code)
            return {
                ...currentState,
                products:filteredProducts,
                isFetching: false,
                error: null,
                successMsg:action.message,
                showDeleteModal: true,
                productToDelete: null,
                productToEdit: null,
                newProduct: null
            }
        case 'DELETE_PRODUCT_FAILED':
            return {
                ...currentState,
                products:currentState.products,
                isFetching: false,
                error: action.error,
                successMsg:null,
                showDeleteModal: true,
                productToDelete: null,
                productToEdit: null,
                newProduct: null
            }
        case 'SHOW_DELETE_MODAL':
            return {
                ...currentState,
                products:currentState.products,
                isFetching: false,
                error: null,
                successMsg:null,
                showDeleteModal: true,
                productToDelete: action.product,
                productToEdit: null,
                newProduct: null
            }
        case 'HIDE_DELETE_MODAL':
            return {
                ...currentState,
                products:currentState.products,
                isFetching: false,
                error: null,
                successMsg:null,
                showDeleteModal: false,
                productToDelete: null,
                productToEdit: null,
                newProduct: null
            }
        case 'ENABLE_PRODUCT_EDIT':
            return {
                ...currentState,
                products:currentState.products,
                isFetching: false,
                error: null,
                successMsg:null,
                showDeleteModal: false,
                productToDelete: null,
                productToEdit: action.product,
                newProduct: null
            }
        case 'CANCEL_PRODUCT_EDIT':
            return {
                ...currentState,
                products:currentState.products,
                isFetching: false,
                error: null,
                successMsg:null,
                showDeleteModal: false,
                productToDelete: null,
                productToEdit: null,
                newProduct: null
            }
        case 'UPDATE_PRODUCT_REQUEST':
            return {
                ...currentState,
                products:currentState.products,
                isFetching: true,
                error: null,
                successMsg:null,
                showDeleteModal: false,
                productToDelete: null,
                productToEdit: action.product,
                newProduct: null
            }
        case 'UPDATE_PRODUCT_SUCCESS':
            return {
                ...currentState,
                products:currentState.products.map((product)=>{
                    if(product.code === action.product.code){
                        return action.product;
                    }
                    return product;
                }),
                isFetching: false,
                error: null,
                successMsg:action.message,
                showDeleteModal: false,
                productToDelete: null,
                productToEdit: null,
                newProduct: null
            }
        case 'UPDATE_PRODUCT_FAILED':
            return {
                ...currentState,
                products:currentState.products,
                isFetching: false,
                error: action.error,
                successMsg:null,
                showDeleteModal: false,
                productToDelete: null,
                productToEdit: null,
                newProduct: null
            }
        default:
            return currentState;
    }
}

export default productReducer;