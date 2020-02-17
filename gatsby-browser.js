require("slick-carousel/slick/slick.css")
require("slick-carousel/slick/slick-theme.css")

const { ga } = require("./src/components/CookieBanner/loadGoogleAnalytics")

exports.onRouteUpdate = ({ location }) => {
  ga("send", "pageview", location.pathname)
}
