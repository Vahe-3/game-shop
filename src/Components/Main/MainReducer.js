function mainReducer(state, action) {
    switch (action.type) {

        case "ADD_GOODS":

            return {
                ...state,
                goods: action.goods

            };

        case "END_LOADING":

            return {
                ...state,
                isLoading: action.loadState
            };

        case "ADD_ERROR":

            return {
                ...state,
                error: action.error
            };

        case "ADD_ORDER":
            return {
                ...state,
                orders: [...state.orders, action.order]

            };

        case "SET_OREDER_QUANTYTI":
            return {
                ...state,
                orders: state.orders.map((order) => {

                    if (order.quantity === 1 && action.val === -1) {
                        return {
                            ...order,
                        }
                    } else if (order.id === action.orderId) {

                        return {
                            ...order,
                            quantity: order.quantity + action.val,
                        }

                    } else {
                        return {
                            ...order
                        }
                    }
                })
            };

        case "IS_BASKET_SHOW":
            return {
                ...state,
                isBasketShow: !state.isBasketShow

            };

        case "DELETE_ORDER":
            return {
                ...state,
                orders: state.orders.filter(order => {
                    return order.id !== action.orderId
                })
            }

        case "IS_HINT_SHOW":
            return {
                ...state,
                isHintShow: action.val
            };


        default:
            return state;
    };


};

export default mainReducer;