import React, { useEffect } from "react"
import Navbar from "components/Navbar"
import NavLogo from "components/NavLogo"

const sectionIdToClass = {
  main: "navBlack",
  about: "navBlack",
  photo: "navWhite",
  policy: "navBlack",
  speakers: "navBlack",
  conferenceSponsors: "navBlack",
  pageEnd: "navWhite"
}

const LinkIds = [
  "dappsLink",
  "speakersLink",
  "navLogo",
  "sponsorsLink",
  "ticketsLink",
  "tgLink",
  "twitterLink"
]

const whiteColorSchemePages = ["/", "/tickets", "/tickets/"]

let breakPointsToClass = {}

const getBreakpointsPositions = () => {
  breakPointsToClass = {}
  Object.keys(sectionIdToClass).forEach(id => {
    const elem = document.getElementById(id)
    if (elem) {
      breakPointsToClass[elem.offsetTop] = sectionIdToClass[id]
    }
  })
}

const DesktopNav = ({ location, data }) => {
  useEffect(() => {
    this.initListeners()
    this.changeColorOnScroll()
  }, [])

  useEffect(() => {}, [location.pathname])

  initListeners = () => {
    getBreakpointsPositions()

    if (typeof window !== "undefined") {
      window.addEventListener("resize", getBreakpointsPositions)
      window.addEventListener("scroll", this.changeColorOnScroll)
    }

    // at first the page is displayed with fallback fonts,
    // after the fonts are received, the page will resize
    // this is to get updated positions
    setTimeout(getBreakpointsPos, 2000)
  }

  removeListenersAndResetAttrs = () => {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.getBreakpointsPos)
      window.removeEventListener("scroll", this.changeColorOnScroll)

      LinkIds.forEach(id => {
        if (this[id]) {
          this[id].classList.add("navWhite")
          this[id].classList.remove("navBlack")
        }
      })
    }
  }

  componentDidUpdate(prevProps) {
    const {
      location: { pathname }
    } = this.props
    const {
      location: { pathname: prevPath }
    } = prevProps

    if (/tickets/.test(pathname) && !/tickets/.test(prevPath)) {
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

  changeColorOnScroll = () => {
    if (typeof window !== "undefined") {
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
            const classToRemove =
              classToAdd === "navWhite" ? "navBlack" : "navWhite"

            this[id].classList.add(classToAdd)
            this[id].classList.remove(classToRemove)
          }
        }
      })
    }
  }


    const { location, data } = this.props
    const isBlack = !whiteColorSchemePages.includes(location.pathname)

    return (
      <>
        <NavLogo location={location} setLinkRef={this.setLinkRef} />
        <Navbar isBlack={isBlack} setLinkRef={this.setLinkRef} data={data} />
      </>
    )
  }

DesktopNav.defaultProps = {
  location: {}
}

export default DesktopNav
