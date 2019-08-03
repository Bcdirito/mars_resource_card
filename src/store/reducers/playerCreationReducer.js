const initialState = {
    username: "",
    color: ""
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "CREATE_USER":
            localStorage.setItem("user", action.username)
            return {
                username: action.name,
                color: action.color
            }
        
        case "MAINTAIN_USER":
            return {
                username: action.username,
                color: action.color
            }
        
        case "LOGOUT_USER":
            localStorage.clear()
            return {
                username: "",
                color: ""
            }
    }
}