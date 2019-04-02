import styled from 'styled-components'
import { Link } from 'gatsby'
import Button from 'components/Button'
import { colors } from 'theme'

const TRANSITION_NAME = 'float'

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  border-top: 2px solid ${colors.black};
  bottom: 0;
  width: 100vw;
  justify-content: center;
  background-color: ${colors.bgWhite};
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  flex-wrap: wrap;
  align-items: center;
  padding: 30px 0 40px;
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
`

const Text = styled.p`
  color: ${colors.black};
  text-align: center;
  font-size: 16px;
  line-height: normal;
  max-width: 822px;
  margin: 0;
  flex-basis: 100%;
  letter-spacing: 1px;
  font-weight: 300;
  padding: 0 15px;
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
  @media screen and (max-width: 767px) {
    flex-basis: 50%;
    text-align: center;
  }

  /* Base for label styling */
  [type='checkbox']:not(:checked),
  [type='checkbox']:checked {
    position: absolute;
    left: -9999px;
  }
  [type='checkbox']:not(:checked) + label,
  [type='checkbox']:checked + label {
    position: relative;
    padding-left: 50px;
    padding-top: 7px;
    cursor: pointer;
    margin-bottom: 3px;
    display: inline-block;
    font-size: 16px;
    color: ${colors.black};
  }
  /* checkbox aspect */
  [type='checkbox']:not(:checked) + label:before,
  [type='checkbox']:checked + label:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: 30px;
    height: 30px;
    border: 1px solid ${colors.black};
    background: transparent;
    border-radius: 5px;
  }
  /* checked mark aspect */
  [type='checkbox']:not(:checked) + label:after,
  [type='checkbox']:checked + label:after {
    content: '';
    position: absolute;
    top: 0px;
    left: 9px;
    display: block;
    transform: rotate(45deg);
    height: 24px;
    width: 9px;
    border-bottom: 5px solid ${colors.black};
    border-right: 5px solid ${colors.black};
    transition: opacity 0.2s;
  }
  /* checked mark aspect changes */
  [type='checkbox']:not(:checked) + label:after {
    opacity: 0;
  }
  [type='checkbox']:checked + label:after {
    opacity: 1;
  }
  /* disabled checkbox */
  [type='checkbox']:disabled:not(:checked) + label:before,
  [type='checkbox']:disabled:checked + label:before {
    opacity: 0.8;
  }
  [type='checkbox']:disabled:checked + label:after {
    opacity: 0.8;
  }
  [type='checkbox']:disabled + label {
    opacity: 0.8;
  }
  /* accessibility */
  [type='checkbox']:checked:focus + label:before,
  [type='checkbox']:not(:checked):focus + label:before {
    border: 2px solid ${colors.black};
  }
  /* hover style just for information */
  label:hover:before {
    border: 2px solid ${colors.black} !important;
    background: #ffffff;
  }
`

const Options = styled.div`
  margin-top: 27px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 60%;
  flex-wrap: wrap;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
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
}
