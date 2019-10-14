const initialState = {
    "credits": {
        "amount": 20,
        "production": 0
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
            let newProductionState = {
                ...state,
                [action.resource]:{
                    ...state[action.resource],
                    "production": state[action.resource]["production"] + action.amt
                }
            }
            localStorage.setItem("resources", JSON.stringify(newProductionState))
            return newProductionState
        
        case "CHANGE_RESOURCES":
            let newAmountState = {
                ...state,
                [action.resource]:{
                    ...state[action.resource],
                    "amount": (state[action.resource]["amount"] + action.amt)
                }
            }

            localStorage.setItem("resources", JSON.stringify(newAmountState))
            return newAmountState

        case "MAINTAIN_RESOURCES":
            let resources = (action && action.resources ? JSON.parse(action.resources) : initialState)
            return resources

        case "GENERATE_RESOURCES":
            localStorage.setItem("resources", JSON.stringify(action.resources))
            return action.resources

        case "RESET_RESOURCES":
            localStorage.setItem("resources", JSON.stringify(initialState))
            return initialState
            

        case "CLEAR_RESOURCES":
            localStorage.clear()
            return initialState

        default:
            return state
    }
}

export default resourceReducer