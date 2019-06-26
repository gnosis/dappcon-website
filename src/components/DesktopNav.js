import React from 'react'
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
  initListeners = () => {
    this.getBreakpointsPos()

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.getBreakpointsPos)
      window.addEventListener('scroll', this.changeColorOnScroll)
    }
    
    // at first the page is displayed with fallback fonts,
    // after the fonts are received, the page will resize
    // this is to get updated positions
    setTimeout(this.getBreakpointsPos, 2000)
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

    if (/get-involved/.test(pathname) && !/get-involved/.test(prevPath)) {
      this.removeListenersAndResetAttrs()
    } else if (pathname !== prevPath) {
      this.initListeners()
      this.changeColorOnScroll()
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
    const { linkColors } = this.state
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
