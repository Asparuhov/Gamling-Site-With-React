const initialState = {
  balance: 5000,
  inventory: [],
  bets: {
    red: 0,
    black: 0,
    green: 0,
    total: 0,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
    case "CONFIGUREBETS":
      if (state.balance > 0 && action.amount <= state.balance) {
        return {
          ...state,
          bets: {
            ...state.bets,
            [action.color]: state.bets[action.color] + action.amount,
          },
          balance: state.balance - action.amount,
        };
      } else {
        alert("Not enough balance for this bet!");
        break;
      }
    case "RESETBETS":
      return {
        ...state,
        bets: {
          red: 0,
          black: 0,
          green: 0,
          total: 0,
        },
      };
    case "CONFIGUREBALANCE":
      if (action.color === "black") {
        return {
          ...state,
          balance: state.balance + state.bets.black * 2,
        };
      }
      if (action.color === "red") {
        return {
          ...state,
          balance: state.balance + state.bets.red * 2,
        };
      }
      if (action.color === "green") {
        return {
          ...state,
          balance: state.balance + state.bets.green * 14,
        };
      }
    default:
      return state;
  }
};

export default reducer;
