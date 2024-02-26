const initialState = {
    id: null,
    firstName: null,
    lastName: null,
    token: null,
    error: null
};


const  authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNIN_SUCCESS':
      const { id, firstName, lastName } = action.payload.body;
      return {
        ...state,
          id,
          firstName,
          lastName,
          error: null
      };
    case 'SET_AUTH_TOKEN':
      return {
        ...state,
          token: action.payload
      };
    case 'SIGN_OUT':
      return {
        ...state,
        id: null,
        firstName: null,
        lastName: null,
        token: null,
        error: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
