const initState = {
  name: "limengjie",
};

const user = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return {
        ...state,
        ...action.user,
      };
    default:
      return state;
  }
};

export default user;
