const { ga } = require('./src/components/CookieBanner/loadGoogleAnalytics')

exports.onRouteUpdate = ({ location }) => {
  ga('send', 'pageview', location.pathname)
}
