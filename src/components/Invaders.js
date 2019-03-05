import React, { Component } from 'react'
import styled from 'styled-components'
import IdleTimer from 'react-idle-timer'
import { EthInvader, DappconInvader, EthLinesInvader } from 'components/Svg'

const InvaderIcons = [EthInvader, DappconInvader, EthLinesInvader]

const colors = ['#ff294e', '#f7834e', '#f3c132']

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: ${props => (props.visible ? 2 : -1)};
`

const InvaderContainer = styled.div.attrs(({ top, left, ...props }) => ({
  style: {
    top: `${top}px`,
    left: `${left}px`,
    ...props,
  },
}))`
  position: absolute;
`

class Invaders extends Component {
  state = {
    invaders: [],
    width: 1600,
    height: 900,
  }

  componentDidMount = () => {
    this.updateScreenSize()

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.updateScreenSize)
    }
  }

  updateScreenSize = () => {
    if (typeof window !== 'undefined') {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
        invaders: [],
      })
    }
  }

  startInvading = () => {
    const { width, height } = this.state

    this.invaderInterval = setInterval(() => {
      if (this.state.invaders.length >= 150) {
        clearInterval(this.invaderInterval)
      }

      this.setState(prevState => ({
        invaders: [
          ...prevState.invaders,
          {
            icon: InvaderIcons[Math.round(getRandomArbitrary(0, InvaderIcons.length - 1))],
            top: getRandomArbitrary(20, height - 60),
            left: getRandomArbitrary(20, width - 60),
            color: colors[Math.round(getRandomArbitrary(0, colors.length - 1))],
          },
        ],
      }))
    }, 800)
  }

  componentWillUnmount = () => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.updateScreenSize)
    }
  }

  render() {
    const { invaders } = this.state

    return (
      <Container visible={invaders.length > 0}>
        <IdleTimer
          onActive={() => {
            this.setState({
              invaders: [],
            })
            clearInterval(this.invaderInterval)
          }}
          onIdle={this.startInvading}
          timeout={2000}
          startOnLoad
        />
        {invaders.map((Invader, i) => {
          return (
            <InvaderContainer
              key={i}
              style={{
                top: Invader.top,
                left: Invader.left,
              }}
            >
              <Invader.icon fill={Invader.color} />
            </InvaderContainer>
          )
        })}
      </Container>
    )
  }
}

export default Invaders
