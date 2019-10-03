import React, { useState, useEffect } from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'
import Cookies from 'js-cookie'
import { colors } from 'theme'
import loadGoogleAnalytics from './loadGoogleAnalytics'
import {
  BannerContainer,
  Text,
  StyledLink,
  AcceptButton,
  CheckboxContainer,
  Options,
  TRANSITION_NAME,
  LinksBtnContainer,
  CookieName,
  Overlay,
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
  accept_expiration: 365,
  deny_expiration: 7,
  policyUrl: '/cookie-policy',
}

const CookieBanner = ({ isCookieBannerOpen, setCookieBannerOpen, }) => {
  const [acceptedCookies, setAcceptedCookies] = useState({
    consentCookie: true,
    consentCookie_analytics: false,
  })

  useEffect(() => {
    for (let cookie of cookies) {
      const cookieValue = Cookies.get(cookie.name)

      if (!cookieValue) {
        setCookieBannerOpen(true)
      }

      if (cookieValue === 'yes') {
        cookie.onAccept()
      }
    }
  }, [setCookieBannerOpen])

  const handleCheckboxClick = ({ target: { name, checked } }) => {
    setAcceptedCookies({
      ...acceptedCookies,
      [name]: checked,
    })
  }

  const hideBanner = () => setCookieBannerOpen(false)

  const handleAccept = () => {
    cookies.forEach(({ name, onAccept }) => {
      if (acceptedCookies[name]) {
        Cookies.set(name, 'yes', { expires: cookieConfig.accept_expiration })
        onAccept()
      } else {
        Cookies.set(name, 'no', { expires: cookieConfig.deny_expiration })
      }
    })

    hideBanner()
  }

  const buttonText = acceptedCookies.consentCookie_analytics ? 'AGREE' : 'ALRIGHT'

  return (
    <CSSTransition in={isCookieBannerOpen} classNames={TRANSITION_NAME} timeout={300} unmountOnExit>
      <>
        <BannerContainer>
          <Text>
            <b>This site uses cookies</b>. Some of them are necessary while other help us improve
            your experience.
          </Text>
          <Options>
            <CheckboxContainer>
              <CookieName>Necessary</CookieName>
              <label className="switch">
                <input type="checkbox" checked disabled />
                <span className="slider round"></span>
              </label>
            </CheckboxContainer>
            <CheckboxContainer>
              <CookieName>Analytics</CookieName>
              <label className="switch">
                <input
                  type="checkbox"
                  name="consentCookie_analytics"
                  checked={acceptedCookies.consentCookie_analytics}
                  onChange={handleCheckboxClick}
                />
                <span className="slider round"></span>
              </label>
            </CheckboxContainer>
          </Options>
          <LinksBtnContainer>
            <p>
              <StyledLink to="/privacy-policy">Privacy Policy</StyledLink> |{' '}
              <StyledLink to="/cookie-policy">Cookie Policy</StyledLink>
            </p>
            <AcceptButton text={buttonText} onClick={handleAccept} hover={colors.black} />
          </LinksBtnContainer>
        </BannerContainer>
        <Overlay></Overlay>
      </>
    </CSSTransition>
  )
}

export default CookieBanner
