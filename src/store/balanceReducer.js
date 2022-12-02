const initialState = {
  balance: 0,
  loading: false
};

// takes state and action
function balanceReducer(state = initialState, action) {
  switch (action.type) {
    case "DEPOSIT":
      return { balance: state.balance + action.payload, loading: false};
    case "WITHDRAW":
      return { balance: state.balance - action.payload, loading: false };
    case "LOADING":
      return {...state, loading:true}
    default:
      return state;
  }
}
export default balanceReducer;
