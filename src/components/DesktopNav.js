import React from 'react'
import { colors } from 'theme'
import Navbar from 'components/Navbar'
import NavLogo from 'components/NavLogo'

const sectionIdToClass = {
  main: 'navWhite',
  about: 'navBlack',
  photo: 'navWhite',
  policy: 'navBlack',
  speakers: 'navBlack',
  conferenceSponsors: 'navBlack',
  pageEnd: 'navWhite',
}

const LinkIds = ['aboutLink', 'speakersLink', 'buyLink', 'navLogo', 'sponsorsLink', 'joinLink']

const whiteColorSchemePages = ['/', '/get-involved', '/get-involved/']

let breakPointsToClass = {}

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
    this.removeListenersAndResetAttrs()
  }

  setLinkRef = el => {
    if (el) {
      this[el.id] = el
    }
  }

  getBreakpointsPos() {
    breakPointsToClass = {}
    Object.keys(sectionIdToClass).forEach(id => {
      const elem = document.getElementById(id)
      if (elem) {
        breakPointsToClass[elem.offsetTop] = sectionIdToClass[id]
      }
    })
  }

  changeColorOnScroll = () => {
    if (typeof window !== 'undefined') {
      LinkIds.forEach(id => {
        if (this[id]) {
          const intersectedPoint = Object.keys(breakPointsToClass)
            .reverse()
            .find(point => {
              const isIntersected =
                parseInt(window.scrollY) >
                parseInt(point) -
                  parseInt(this[id].offsetTop) -
                  0.5 * parseInt(this[id].clientHeight)

              return isIntersected
            })

          if (intersectedPoint) {
            if (id === 'buyLink') {
              this[id].children[0].children[0].setAttribute(
                'stroke',
                breakPointsToClass[intersectedPoint],
              )
            } else if (id === 'navLogo') {
              this.setState({
                navLogoColor: breakPointsToClass[intersectedPoint],
              })
            } else {
              this[id].classList.add(breakPointsToClass[intersectedPoint])
            }
          }
        }
      })
    }
  }

  render() {
    const { location, data } = this.props
    const { navLogoColor, linkColors } = this.state
    const isBlack = !whiteColorSchemePages.includes(location.pathname)

    return (
      <>
        <NavLogo fill={navLogoColor} location={location} setLinkRef={this.setLinkRef} />
        <Navbar
          isBlack={isBlack}
          setLinkRef={this.setLinkRef}
          data={data}
          linkColors={linkColors}
        />
      </>
    )
  }
}

DesktopNav.defaultProps = {
  location: {},
}

export default DesktopNav
