
const initialState = {
    balance: 5000
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDBALANCE':
            return {
                balance: state.balance + action.amount
            }
        case 'REMOVEBALANCE':
            return {
                balance: state.balance - action.amount
            }
        default:
            return state;
    }
}


export default reducer;