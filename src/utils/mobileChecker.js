const mobileChecker = (nav) => {
    let userAgent = nav.userAgent

    let windowObj = {
      iPhone: {
        cb: userAgent.match(/iPhone/i),
        device: "mobile"
      },
      iPad: {
        cb: userAgent.match(/iPad/i),
        device: "tablet"
      },
      iPod: {
        cb: userAgent.match(/iPod/i),
        device: "mobile"
      },
      android: {
        cb: userAgent.match(/Android/i),
        device: "mobile"
      },
      webOs: {
        cb: userAgent.match(/webOS/i),
        device: "mobile"
      },
      blackBerry: {
        cb: userAgent.match(/BlackBerry/i),
        device: "mobile"
      },
      windowsPhone: {
        cb: userAgent.match(/Windows Phone/i),
        device: "mobile"
      }
    }

    for (const key in windowObj) {
      if (windowObj[key]["cb"] !== null) return windowObj[key]["device"]
    }

    return "desktop"
}

module.exports = mobileChecker