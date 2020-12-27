const initialState = {
  balance: 5000,
  inventory: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDBALANCE":
      return {
        balance: state.balance + action.amount,
      };
    case "REMOVEBALANCE":
      return {
        balance: state.balance - action.amount,
      };
    case "ADDINVENTORY":
      return {
        ...state,
        inventory: state.inventory.concat(action.info),
        balance: state.balance - action.cost,
      };
    case "BOUGHT":
      alert("Sending payment... It could take up to 24 hours!");
      return {
        ...state,
        inventory: state.inventory.filter((_, index) => index !== action.index),
      };
    case "RETURNED":
      return {
        ...state,
        inventory: state.inventory.filter((_, index) => index !== action.index),
        balance: state.balance + action.value,
      };

    default:
      return state;
  }
};

export default reducer;
