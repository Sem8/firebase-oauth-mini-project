const initialState = {
  user: {},
  userGroups: [],
  error: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.payload) {
    case "AUTH_START":
      return state;
    default:
      return state;
  }
};
