const initialState = {
    id: null,
    firstName: null,
    lastName: null,
    token: null,
    error: null, 
    rememberMe: false
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
        error: action.payload,
      };
      case 'SET_REMEMBER_ME':
        // console.log("New value of rememberMe:", action.payload);
        return {
          ...state,
          rememberMe: action.payload,
        };
        case 'UPDATE_USER_PROFILE':
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    default:
      return state;
  }
};

export default authReducer;
