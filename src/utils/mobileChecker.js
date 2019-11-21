const mobileChecker = (nav) => {
    let userAgent = nav.userAgent

    let windowObj = {
      "iPhone": userAgent.match(/iPhone/i),
      "iPad": userAgent.match(/iPad/i),
      "iPod": userAgent.match(/iPod/i),
      "android": userAgent.match(/Android/i),
      "webOs": userAgent.match(/webOS/i),
      "blackBerry": userAgent.match(/BlackBerry/i),
      "windowsPhone": userAgent.match(/Windows Phone/i),
      "linux": userAgent.match(/Linux/i)
    }

    for (const key in windowObj) {
      if (windowObj[key] !== null) return true
    }

    return false
}

module.exports = mobileChecker