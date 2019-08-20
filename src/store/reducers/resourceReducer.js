const initialState = {
    "credits": {
        "amount": 0,
        "production": 20
    },
    "steel": {
        "amount": 0,
        "production": 0
    },
    "titanium": {
        "amount": 0,
        "production": 0
    },
    "plants": {
        "amount": 0,
        "production": 0
    },
    "energy": {
        "amount": 0,
        "production": 0
    },
    "heat": {
        "amount": 0,
        "production": 0
    },
}

const resourceReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_PRODUCTION":
            return {
                ...state,
                [action.resource]:{
                    ...state[action.resource],
                    "production": state[action.resource]["production"] + action.amt
                }
            }
        
        case "CHANGE_RESOURCES":
            debugger
            return {
                [action.resource]:{
                    ...this.state,
                    "amount": (this.state.amount + action.amt)
                }
            }

        default:
            return state
    }
}

export default resourceReducer