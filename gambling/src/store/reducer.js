
const initialState = {
    balance: 5000,
    inventory: [],
    options: {
        paypal: [
            [20, 2000],
            [40, 4000],
            [60, 6000],
            [80, 8000],
            [100, 10000]
        ]
    }
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
        case 'ADDINVENTORY':
            return {
                ...state,
                inventory: [...state.inventory, action.info]
            }
        default:
            return state;
    }
}


export default reducer;