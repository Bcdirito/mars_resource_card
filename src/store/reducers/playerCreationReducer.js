const initialState = {
    playerName: "",
    color: "",
    terraRating: 20,
    generation: 1
}

const playerReducer = (state = initialState, action) => {
    switch(action.type) {
        case "CREATE_PLAYER":
            let initialTerraRating = action.gameType === "solo" ? 14 : 20
            localStorage.setItem("player", action.name)
            localStorage.setItem("color", action.color)
            localStorage.setItem("terraRating", JSON.stringify(initialTerraRating))
            return {
                playerName: action.name,
                color: action.color,
                terraRating: initialTerraRating,
                generation: initialState.generation
            }
        
        case "MAINTAIN_PLAYER":
            return {
                playerName: action.player.player,
                color: action.player.color,
                terraRating: action.player.terraRating,
                generation: action.player.generation
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