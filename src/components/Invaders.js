import React, { Component } from 'react'
import styled from 'styled-components'
import { Spring } from 'react-spring/renderprops'
import IdleTimer from 'react-idle-timer'
import { EthInvader, DappconInvader } from 'components/Svg'

const InvaderIcons = [EthInvader, DappconInvader]

const colors = ['#ff294e', '#f7834e', '#f3c132']

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: ${props => (props.visible ? 2 : 0)};
`

const Invader = styled.div.attrs(({ top, left, ...props }) => ({
  style: {
    top: `${top}px`,
    left: `${left}px`,
    ...props
  }
}))`
  position: absolute;
`

class Invaders extends Component {
  state = {
    showInvaders: false,
    invadersAmount: 30,
    width: 1600,
    height: 900
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
        invadersAmount: Math.round(window.innerWidth / 40)
      })
    }
  }

  componentWillUnmount = () => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.updateScreenSize)
    }
  }

  render() {
    const { showInvaders, invadersAmount, width, height } = this.state

    return (
      <Container visible={showInvaders}>
        <IdleTimer
          ref={ref => {
            this.idleTimer = ref
          }}
          onActive={() =>
            this.setState({
              showInvaders: false
            })
          }
          onIdle={() =>
            this.setState({
              showInvaders: true
            })
          }
          timeout={2000}
          startOnLoad
        />
        {showInvaders &&
          Array(invadersAmount)
            .fill(invadersAmount)
            .map((_, i) => {
              const Icon = InvaderIcons[Math.round(getRandomArbitrary(0, InvaderIcons.length - 1))]
              const top = getRandomArbitrary(20, height - 60)
              const left = getRandomArbitrary(20, width - 60)
              const fillColor = colors[Math.round(getRandomArbitrary(0, colors.length - 1))]
              return (
                <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
                  {props => (
                    <Invader
                      key={i}
                      style={{
                        top,
                        left,
                        ...props
                      }}
                    >
                      <Icon fill={fillColor} />
                    </Invader>
                  )}
                </Spring>
              )
            })}
      </Container>
    )
  }
}

export default Invaders
