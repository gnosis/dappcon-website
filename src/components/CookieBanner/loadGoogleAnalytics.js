const GOOGLE_ANALYTICS_URL = 'https://www.google-analytics.com/analytics.js'
const GOOGLE_ANALYTICS_ID = 'UA-83220550-13'

export const ga = (
  ...args // eslint-disable-next-line
) =>
  (window.ga && window.ga.q && window.ga.q(...args)) ||
  (window.ga && window.ga(...args)) ||
  (() => {})(...args) // no-op

const loadGoogleAnalytics = () => {
  const script = document.createElement('script')
  script.src = GOOGLE_ANALYTICS_URL
  script.type = 'text/javascript'

  document.head.appendChild(script)

  script.onload = () => {
    ga('create', GOOGLE_ANALYTICS_ID, 'auto')
    ga('set', 'anonymizeIp', true)
    ga('send', 'pageview')
  }
}

export default loadGoogleAnalytics
