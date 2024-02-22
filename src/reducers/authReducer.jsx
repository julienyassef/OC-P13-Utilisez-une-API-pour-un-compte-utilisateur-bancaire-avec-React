const initialState = {
  auth: {
    id: null,
    firstName: null,
    lastName: null,
    token: null,
    error: null
  }
};


const  authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      const { id, firstName, lastName, token } = action.payload; 
      console.log('LOGIN_SUCCESS', action.payload);
      return {
        ...state,
        auth: {
          id,
          firstName,
          lastName,
          token,
          error: null
        }
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        auth: {
          id: null,
          firstName: null,
          lastName: null,
          token: null,
          error: action.payload
        }
      };
    case 'SET_AUTH_TOKEN':
      console.log('New state after setting auth token:', {
        ...state,
        auth: {
          ...state.auth,
          token: action.payload
        }
      });
      return {
        ...state,
        auth: {
          ...state.auth,
          token: action.payload
        }
      };
    default:
      return state;
  }
};

export default authReducer;
