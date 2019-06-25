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
          this[id].classList.add('navWhite')
          this[id].classList.remove('navBlack')
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
    console.log(breakPointsToClass)
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
            const classToAdd = breakPointsToClass[intersectedPoint]
            const classToRemove = classToAdd === 'navWhite' ? 'navBlack' : 'navWhite'

            this[id].classList.add(classToAdd)
            this[id].classList.remove(classToRemove)
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
        <NavLogo location={location} setLinkRef={this.setLinkRef} />
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
