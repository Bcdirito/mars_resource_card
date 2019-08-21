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
            let newState = {
                ...state,
                [action.resource]:{
                    ...state[action.resource],
                    "production": state[action.resource]["production"] + action.amt
                }
            }
            localStorage.setItem("resources", JSON.stringify(newState))
            return newState
        
        case "CHANGE_RESOURCES":
            return {
                [action.resource]:{
                    ...this.state,
                    "amount": (this.state.amount + action.amt)
                }
            }

        case "MAINTAIN_RESOURCES":
            return JSON.parse(action.resources)

        case "RESET_RESOURCES":
            localStorage.setItem("resources", JSON.stringify(initialState))
            return state
            

        case "CLEAR_RESOURCES":
            localStorage.clear()
            return initialState

        default:
            return state
    }
}

export default resourceReducer