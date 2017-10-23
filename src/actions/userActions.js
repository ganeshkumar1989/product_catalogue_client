const apiUrl = "http://localhost:3001/login/";

export const submit = () => {
  return {
    type: 'SUBMIT'
  }
}

export const changeInput = (name, value) => {
  return {
    type: 'INPUT_CHANGED',
    name, 
    value
  }
}

export const login = (username, password) => {
  return (dispatch) => {
    dispatch(loginRequest(username, password));
    return fetch(apiUrl, {
        method:'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
    }).then(response => {
        if(response.ok){
            response.json().then(data => {
                if(data.success){
                    dispatch(loginRequestSuccess(data.user, data.message))
                }
                else{
                    dispatch(loginRequestFailed(data.message))
                }
            })
        }
        else{
            response.json().then(error => {
                dispatch(loginRequestFailed(error))
            })
        }
    })
  }
}

export const loginRequest = (username, password) => {
  return {
    type: 'LOGIN_REQUEST',
    username, 
    password
  }
}

export const loginRequestSuccess = (user,message) => {
  sessionStorage.setItem('user', JSON.stringify({token: user[0].token}));
  return {
    type: 'LOGIN_REQUEST_SUCCESS',
    user:user,
    message:message
  }
}
export const loginRequestFailed = (error) => {
  return {
    type: 'LOGIN_REQUEST_FAILED',
    error
  }
}