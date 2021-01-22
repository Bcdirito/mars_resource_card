const mobileChecker = () => {
    localStorage.removeItem("device")
    let device = window.innerWidth >= 430 ? "Desktop" : "Mobile"
    device = window.innerWidth > window.innerHeight && window.innerHeight <= 430 ? "Mobile" : "Desktop"

    localStorage.setItem("device", device)
    return device
}

module.exports = mobileChecker