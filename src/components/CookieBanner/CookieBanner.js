import React, { useState, useEffect } from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'
import Cookies from 'js-cookie'
import { colors } from 'theme'
import loadGoogleAnalytics from './loadGoogleAnalytics'
import {
  BannerContainer,
  CloseButton,
  Text,
  StyledLink,
  AcceptButton,
  CheckboxContainer,
  Options,
  TRANSITION_NAME,
  CookieName,
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

const CookieBanner = () => {
  const [visible, setVisibility] = useState(false)
  const [acceptedCookies, setAcceptedCookies] = useState({
    consentCookie: true,
    consentCookie_analytics: true,
  })

  useEffect(() => {
    setVisibility(true)
    // for (let cookie of cookies) {
    //   const cookieValue = Cookies.get(cookie.name)

    //   if (!cookieValue) {
    //     setVisibility(true)
    //   }

    //   if (cookieValue === 'yes') {
    //     cookie.onAccept()
    //   }
    // }
  }, [])

  const handleCheckboxClick = ({ target: { name, checked } }) => {
    setAcceptedCookies({
      ...acceptedCookies,
      [name]: checked,
    })
  }

  const hideBanner = () => setVisibility(false)

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

  return (
    <CSSTransition in={visible} classNames={TRANSITION_NAME} timeout={300} unmountOnExit>
      <BannerContainer>
        <Text>
          <b>This site uses cookies</b>. Some of them are necessary while other help us improve your
          experience.
        </Text>
        <Options>
          <CheckboxContainer>
            <CookieName>Necessary</CookieName>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </CheckboxContainer>
          <CheckboxContainer>
            <CookieName>Analytics</CookieName>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </CheckboxContainer>
          <AcceptButton text="Agree" onClick={handleAccept} hover={colors.reddishPink} />
        </Options>
      </BannerContainer>
    </CSSTransition>
  )
}

export default CookieBanner
