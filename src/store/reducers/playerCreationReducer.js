const initialState = {
    playerName: "",
    color: "",
    terraRating: 20
}

const playerReducer = (state = initialState, action) => {
    switch(action.type) {
        case "CREATE_PLAYER":
            localStorage.setItem("player", action.name)
            localStorage.setItem("color", action.color)
            localStorage.setItem("terraRating", JSON.stringify(20))
            return {
                playerName: action.name,
                color: action.color,
                terraRating: 20
            }
        
        case "MAINTAIN_PLAYER":
            return {
                playerName: action.player.player,
                color: action.player.color,
                terraRating: action.player.terraRating
            }
        
        case "CHANGE_TERRAFORM":
            let newRating = Number(state.terraRating) + action.amt
            localStorage.setItem("terraRating", JSON.stringify(newRating))
            return {
                ...state,
                terraRating: newRating
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