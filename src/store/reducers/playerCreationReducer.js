const initialState = {
    playerName: "",
    color: ""
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "CREATE_PLAYER":
            debugger
            localStorage.setItem("player", action.playerName)
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
    }
}

export default reducer