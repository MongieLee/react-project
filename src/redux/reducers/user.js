const UPDATE_USER = "UPDATE_USER";

const user = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        user: { ...state.user, ...action.user },
      };
    default:
      return state;
  }
};

export default user;
