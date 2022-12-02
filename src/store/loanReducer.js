const initialState = {
    loan: false,
};

// takes state and action
function loanReducer(state = initialState, action) {
    switch (action.type) {
        case "APPLY":
            return { loan: true };

        default:
            return state;
    }
}
export default loanReducer;
