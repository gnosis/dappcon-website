import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { TicketSVG } from 'components/Svg'
import { colors } from 'theme'

const NavbarMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  box-orient: vertical;
  top: 0;
  right: 30px;
  position: fixed;
  width: 50px;
  height: 604px;
  z-index: 1;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

const StyledLink = styled(Link).attrs(({ isBlack }) => ({
  color: isBlack ? colors.black : colors.white,
  hoverColor: isBlack ? colors.reddishPink : colors.black
}))`
  writing-mode: vertical-lr;
  margin-top: 25px;
  font-size: 19px;
  color: ${props => props.color};
  text-decoration: none;
  padding-right: 10px;
  font-weight: 800;
  transition: color 0.3s ease-out;

  &:hover {
    color: ${props => props.hoverColor};
  }
`

const StyledIconLink = styled(Link)`
  transform: rotate(-45deg);
  margin-top: 40px;
  margin-right: -10px;
`

const idToColor = {
  main: colors.white,
  about: colors.black,
  photo: colors.white,
  speakers: colors.black
}

const LinkIds = ['aboutLink', 'speakersLink', 'organizersLink', 'buyLink']

let breakPointsToColor = {}

const Navbar = class extends React.Component {
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
        if (id === 'buyLink') {
          this[id].children[0].children[0].setAttribute('stroke', colors.black)
        } else {
          this[id].style.color = null
        }
      })
    }
  }

  componentDidMount() {
    const {
      location: { pathname }
    } = this.props

    if (pathname === '/') {
      this.initListeners()
    }
  }

  componentDidUpdate(prevProps) {
    const {
      location: { pathname }
    } = this.props
    const {
      location: { pathname: prevPath }
    } = prevProps

    if (pathname === '/') {
      this.initListeners()
    } else if (prevPath === '/' && pathname !== '/') {
      this.removeListenersAndResetAttrs()
    }
  }

  componentWillUnmount() {
    const {
      location: { pathname }
    } = this.props

    if (pathname === '/') {
      this.removeListenersAndResetAttrs()
    }
  }

  setLinkRef = e => {
    this[e.id] = e
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

  changeColorOnScroll = e => {
    if (typeof window !== 'undefined') {
      LinkIds.forEach(id => {
        if (this[id]) {
          Object.keys(breakPointsToColor).forEach(point => {
            if (
              parseInt(window.scrollY) >
              parseInt(point) - parseInt(this[id].offsetTop) - 0.5 * parseInt(this[id].clientHeight)
            ) {
              if (id === 'buyLink') {
                this[id].children[0].children[0].setAttribute('stroke', breakPointsToColor[point])
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
    const { location = {} } = this.props
    const isBlack = location.pathname !== '/'

    return (
      <NavbarMenuContainer>
        <StyledLink id="aboutLink" isBlack={isBlack} to="/#about" innerRef={this.setLinkRef}>
          About
        </StyledLink>
        {/* <StyledLink isBlack={isBlack} to="/program">
          Programm
        </StyledLink> */}
        <StyledLink id="speakersLink" isBlack={isBlack} to="/speakers" innerRef={this.setLinkRef}>
          Speakers
        </StyledLink>
        <StyledLink id="organizersLink" isBlack={isBlack} to="/#gnosis" innerRef={this.setLinkRef}>
          Organizer
        </StyledLink>
        {/* <StyledLink isBlack={isBlack} to="/#sponsors">
          Sponsors
        </StyledLink> */}
        <StyledIconLink id="buyLink" to="/contact/examples" rotate="45deg" innerRef={this.setLinkRef}>
          <TicketSVG fill={isBlack ? colors.black : colors.white} />
        </StyledIconLink>
      </NavbarMenuContainer>
    )
  }
}

export default Navbar
