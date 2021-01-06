const initState = {
  city: "珠海",
};

const city = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_CITY":
      return { ...state, ...action.city };
    default:
      return state;
  }
};

export default city;
