import React, { Component } from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'
import Cookies from 'js-cookie'
import loadGoogleAnalytics from 'utils/loadGoogleAnalytics'
import { colors } from 'theme'
import {
  BannerContainer,
  CloseButton,
  Text,
  StyledLink,
  AcceptButton,
  CheckboxContainer,
  Options,
  TRANSITION_NAME,
} from './styled'

const cookies = [
  { name: 'consentCookie', onAccept: () => ({}) },
  {
    name: 'consentCookie_analytics',
    onAccept: () => {
      loadGoogleAnalytics()
    },
  },
]

var cookieConfig = {
  domain: 'dappcon.io',
  accept_expiration: 10000,
  deny_expiration: 7,
  policyUrl: '/cookie-policy',
}

class CookieBanner extends Component {
  state = {
    shown: false,
    accepted: {
      consentCookie: true,
      consentCookie_analytics: false,
    },
  }

  componentDidMount() {
    for (let cookie of cookies) {
      const cookieValue = Cookies.get(cookie.name)

      if (!cookieValue) {
        this.setState({
          shown: true,
        })
      }

      if (cookieValue === 'yes') {
        cookie.onAccept()
      }
    }
  }

  handleCheckboxClick = ({ target: { name, checked } }) => {
    this.setState(prev => ({
      ...prev,
      accepted: {
        ...prev.accepted,
        [name]: checked,
      },
    }))
  }

  hideBanner = () =>
    this.setState({
      shown: false,
    })

  handleAccept = () => {
    const { accepted } = this.state

    cookies.forEach(({ name, onAccept }) => {
      if (accepted[name]) {
        Cookies.set(name, 'yes', { expires: cookieConfig.accept_expiration })
        onAccept()
      } else {
        Cookies.set(name, 'no', { expires: cookieConfig.deny_expiration })
      }
    })

    this.hideBanner()
  }

  handleDecline = () => {
    cookies.forEach(({ name }) => {
      Cookies.set(name, 'no', { expires: cookieConfig.deny_expiration })
    })

    this.hideBanner()
  }

  render() {
    const { shown } = this.state

    return (
      <CSSTransition in={shown} classNames={TRANSITION_NAME} timeout={300} unmountOnExit>
        <BannerContainer>
          <CloseButton onClick={this.handleDecline}>X</CloseButton>
          <Text>
            We use cookies to give you the best experience and to help improve our website. Please
            read our <StyledLink to={cookieConfig.policyUrl}>Cookie Policy</StyledLink> for more
            information. By clicking “Accept Cookies,” you agree to the storing of cookies on your
            device to enhance site navigation and analyze site usage.
          </Text>
          <Options>
            <CheckboxContainer>
              <input id="cb-1" name="consentCookie" type="checkbox" disabled="disabled" checked />
              <label htmlFor="cb-1">Necessary</label>
            </CheckboxContainer>
            <CheckboxContainer>
              <input
                id="cb-2"
                name="consentCookie_analytics"
                type="checkbox"
                onClick={this.handleCheckboxClick}
              />
              <label htmlFor="cb-2">Analytics</label>
            </CheckboxContainer>
            <AcceptButton text="Accept Cookies" onClick={this.handleAccept} hover={colors.reddishPink} />
          </Options>
        </BannerContainer>
      </CSSTransition>
    )
  }
}

export default CookieBanner
