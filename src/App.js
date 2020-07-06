import React from 'react'
import styled from '@emotion/styled'
import Header from 'components/Header'
import CharactersList from 'pages/Characters'
import media from './theme/media'
import { CharacterProvider } from './store/CharacterContext'

const AppContainer = styled.div`
  background: linear-gradient(
    180deg,
    rgba(54, 148, 87, 1) 0%,
    rgba(31, 96, 50, 1) 50%,
    rgba(9, 48, 9, 1) 100%
  );
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  overflow-x: hidden;
`

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90vw;
  margin: ${({ theme }) => theme.spacing.xl} auto;
  ${({ theme }) => media.xs`
    margin: ${theme.spacing.sm} auto;
  `}
`

function App() {
  return (
    <AppContainer>
      <Header />
      <MainContainer>
        <CharacterProvider>
          <CharactersList />
        </CharacterProvider>
      </MainContainer>
    </AppContainer>
  )
}

export default App
