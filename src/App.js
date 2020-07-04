import React from 'react'
import styled from '@emotion/styled/macro'
import { keyframes } from '@emotion/core'
import logo from './logo.svg'

const SpinAnimation = keyframes`
   from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const AppContainer = styled.div`
  text-align: center;
`

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${SpinAnimation} infinite 20s linear;
  }
`

const LinkTag = styled.a`
  color: #61dafb;
`

function App() {
  return (
    <AppContainer>
      <Header>
        <Logo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <LinkTag
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </LinkTag>
      </Header>
    </AppContainer>
  )
}

export default App
