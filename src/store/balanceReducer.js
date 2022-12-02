const initialState = {
  balance: 0,
};

// takes state and action
function balanceReducer(state = initialState, action) {
  switch (action.type) {
    case "DEPOSIT":
      return { balance: state.balance + action.payload };
    case "WITHDRAW":
      return { balance: state.balance - action.payload };
    default:
      return state;
  }
}
export default balanceReducer;
