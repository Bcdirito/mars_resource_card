export const changeProduction = (resource, amt) => ({type: "CHANGE_PRODUCTION", resource, amt})

export const changeResources = (resource, amt) => ({type: "ADD_RESOURCES", resource, amt})

export const generateResources = (resources, rating) => ({type: "GENERATE_RESOURCES", resources, rating})