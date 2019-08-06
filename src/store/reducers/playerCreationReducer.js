const initialState = {
    playerName: "",
    color: ""
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "CREATE_PLAYER":
            localStorage.setItem("player", action.playerName)
            localStorage.setItem("color", action.color)
            return {
                playerName: action.playerName,
                color: action.color
            }
        
        case "MAINTAIN_PLAYER":
            return {
                playerName: action.playerName,
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

export default reducer