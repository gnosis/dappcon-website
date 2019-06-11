import React from 'react'
import { colors } from 'theme'
import Navbar from 'components/Navbar'
import NavLogo from 'components/NavLogo'

const idToColor = {
  main: colors.white,
  about: colors.black,
  photo: colors.white,
  speakers: colors.black,
  conferenceSponsors: colors.black,
  pageEnd: colors.white,
}

const LinkIds = ['aboutLink', 'speakersLink', 'buyLink', 'navLogo', 'sponsorsLink', 'pageEnd']

const whiteColorSchemePages = ['/', '/get-involved', '/get-involved/']

let breakPointsToColor = {}

const DesktopNav = class extends React.PureComponent {
  state = {
    navLogoColor: '',
  }

  initListeners = () => {
    this.getBreakpointsPos()

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.getBreakpointsPos)
      window.addEventListener('scroll', this.changeColorOnScroll)
    }
  }

  removeListenersAndResetAttrs = () => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.getBreakpointsPos)
      window.removeEventListener('scroll', this.changeColorOnScroll)

      LinkIds.forEach(id => {
        if (this[id]) {
          if (id === 'buyLink') {
            this[id].children[0].children[0].setAttribute('stroke', colors.black)
          } else if (id === 'navLogo') {
            this.setState({
              navLogoColor: '',
            })
          } else {
            this[id].style.color = null
          }
        }
      })
    }
  }

  componentDidMount() {
    this.initListeners()
    this.changeColorOnScroll()
  }

  componentDidUpdate(prevProps) {
    const {
      location: { pathname },
    } = this.props
    const {
      location: { pathname: prevPath },
    } = prevProps

    if (pathname !== prevPath) {
      this.getBreakpointsPos()
      this.changeColorOnScroll()
    } else if (/get-involved/.test(pathname) && !/get-involved/.test(prevPath)) {
      this.removeListenersAndResetAttrs()
    }
  }

  componentWillUnmount() {
    const {
      location: { pathname },
    } = this.props

    this.removeListenersAndResetAttrs()
  }

  setLinkRef = el => {
    if (el) {
      this[el.id] = el
    }
  }

  getBreakpointsPos() {
    breakPointsToColor = {}
    Object.keys(idToColor).forEach(id => {
      const elem = document.getElementById(id)
      if (elem) {
        breakPointsToColor[elem.offsetTop] = idToColor[id]
      }
    })
  }

  changeColorOnScroll = () => {
    if (typeof window !== 'undefined') {
      LinkIds.forEach(id => {
        if (this[id]) {
          Object.keys(breakPointsToColor).forEach(point => {
            const isIntersected =
              parseInt(window.scrollY) >
              parseInt(point) - parseInt(this[id].offsetTop) - 0.5 * parseInt(this[id].clientHeight)
            if (isIntersected) {
              if (id === 'buyLink') {
                this[id].children[0].children[0].setAttribute('stroke', breakPointsToColor[point])
              } else if (id === 'navLogo') {
                this.setState({
                  navLogoColor: breakPointsToColor[point],
                })
              } else {
                this[id].style.color = breakPointsToColor[point]
              }
            }
          })
        }
      })
    }
  }

  render() {
    const { location, data } = this.props
    const { navLogoColor } = this.state
    const isBlack = !whiteColorSchemePages.includes(location.pathname)
    console.log(breakPointsToColor)

    return (
      <>
        <NavLogo fill={navLogoColor} location={location} setLinkRef={this.setLinkRef} />
        <Navbar isBlack={isBlack} setLinkRef={this.setLinkRef} data={data} />
      </>
    )
  }
}

DesktopNav.defaultProps = {
  location: {},
}

export default DesktopNav
