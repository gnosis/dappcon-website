import styled from 'styled-components'

const ShowOnMobile = styled.span`
  display: none;

  @media screen and (max-width: 767px) {
    display: initial;
  }
`

export default ShowOnMobile
