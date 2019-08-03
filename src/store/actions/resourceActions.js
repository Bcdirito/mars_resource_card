export const changeProduction = (resource, amt) => ({type: "CHANGE_PRODUCTION", resource, amt})

export const addResources = (resource, amt) => ({type: "ADD_RESOURCES", resource, amt})

export const subtractResources = (resource, amt) => ({type: "SUBTRACT_RESOURCES", resource, amt})