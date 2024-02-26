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
    case 'LOGIN_FAILURE':
      return {
        ...state,
          id: null,
          firstName: null,
          lastName: null,
          token: null,
          error: action.payload
      };
    case 'SET_AUTH_TOKEN':
      // console.log('New state after setting auth token:', {
      //   ...state,
      //   auth: {
      //     ...state.auth,
      //     token: action.payload
      //   }
      // });
      return {
        ...state,
          token: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
