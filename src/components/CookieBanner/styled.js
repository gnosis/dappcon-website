import styled from 'styled-components'
import { Link } from 'gatsby'
import Button from 'components/Button'
import { colors } from 'theme'

const TRANSITION_NAME = 'float'

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 30px;
  left: 30px;
  width: 410px;
  border-radius: 10px;
  justify-content: center;
  background-color: ${colors.bgWhite};
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  flex-wrap: wrap;
  align-items: center;
  padding: 30px;
  box-sizing: border-box;
  z-index: 2;

  &.${TRANSITION_NAME}-enter {
    bottom: -200px;
  }
  &.${TRANSITION_NAME}-enter-active {
    bottom: 0;
    transition: all 300ms ease-out;
  }
  &.${TRANSITION_NAME}-exit {
    bottom: 0;
  }
  &.${TRANSITION_NAME}-exit-active {
    bottom: -200px;
    transition: all 300ms ease-out;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: 0;
  background: transparent;
  cursor: pointer;
  color: ${colors.reddishPink};
  font-size: 20px;

  &:focus {
    outline-color: ${colors.secondaryBlack};
  }
`

const Text = styled.p`
  color: ${colors.black};
  text-align: left;
  font-size: 19px;
  line-height: normal;
  margin: 0;
  flex-basis: 100%;
  letter-spacing: normal;
  font-weight: 300;

  b {
    font-weight: 700;
  }
`

const StyledLink = styled(Link)`
  color: ${colors.reddishPink};
  text-decoration: none;
`

const AcceptButton = styled(Button)`
  padding: 6px 10px;
  font-size: 16px;
  border: 2px solid ${colors.black};
  color: ${colors.black};

  @media screen and (max-width: 767px) {
    margin-top: 30px;
  }
`

const CheckboxContainer = styled.div`
  display: flex;

  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 18px;
    background-color: #d8d8d8;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 0;
    bottom: -4px;
    background-color: #000;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #f5bebe;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(35px);
    -ms-transform: translateX(35px);
    transform: translateX(35px);
    background-color: #eb2547;
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`

const CookieName = styled.p`
  flex-basis: 30%;
`

const Options = styled.div`
  margin-top: 27px;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export {
  BannerContainer,
  CloseButton,
  Text,
  StyledLink,
  AcceptButton,
  CheckboxContainer,
  Options,
  TRANSITION_NAME,
  CookieName,
}
