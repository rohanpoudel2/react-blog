const Reducer = (state, action) => {
  switch (action.type) {
    case 'Login_Start': {
      return {
        user: null,
        isFetching: true,
        error: false
      }
    };
    case 'Login_Success': {
      console.log('helo')
      return {
        user: action.payload,
        isFetching: false,
        error: false
      };
    }
    case 'Login_Failure': {
      return {
        user: null,
        isFetching: false,
        error: true
      };
    }
    case 'Update_Start': {
      return {
        ...state,
        isFetching: true
      };
    }
    case 'Update_Success': {
      return {
        user: action.payload,
        isFetching: false,
        error: false
      };
    }
    case 'Update_Failure': {
      return {
        user: state.user,
        isFetching: false,
        error: true
      };
    }
    case 'Delete_User': {
      return {
        user: null,
        isFetching: false,
        error: false
      };
    }
    case 'Logout': {
      return {
        user: null,
        isFetching: false,
        error: false
      };
    }
    default: {
      return state;
    }
  }
}

export default Reducer