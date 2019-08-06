const initialState = {
    playerName: "",
    color: ""
}

const playerReducer = (state = initialState, action) => {
    switch(action.type) {
        case "CREATE_PLAYER":
            debugger
            localStorage.setItem("player", action.name)
            localStorage.setItem("color", action.color)
            return {
                playerName: action.name,
                color: action.color
            }
        
        case "MAINTAIN_PLAYER":
            return {
                playerName: action.name,
                color: action.color
            }
        
        case "LOGOUT_PLAYER":
            localStorage.clear()
            return {
                playerName: "",
                color: ""
            }
        
        default:
            return state
    }
}

export default playerReducer