const initialState = {
    playerName: "",
    color: ""
}

const playerReducer = (state = initialState, action) => {
    switch(action.type) {
        case "CREATE_PLAYER":
            localStorage.setItem("player", action.name)
            localStorage.setItem("color", action.color)
            return {
                playerName: action.name,
                color: action.color
            }
        
        case "MAINTAIN_PLAYER":
            return {
                playerName: action.player.player,
                color: action.player.color
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