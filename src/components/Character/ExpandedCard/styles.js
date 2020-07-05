import styled from '@emotion/styled'
import { Card } from '../Card/styles'
import { keyframes } from '@emotion/core'
import { RoundButton } from '../../Button'

const fadeIn = keyframes`
  0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

export const ExpandedCard = styled(Card)`
  height: 330px;
  overflow: visible;
`

export const ExpandedCardContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-flow: nowrap;
  flex-grow: 1;
  position: relative;
`
export const CharacterDetails = styled.section`
  align-self: stretch;
  padding: 2rem 2rem 2rem 0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  animation: ${fadeIn} 0.8s ease-in;
  > section {
    animation: ${fadeIn} 1s ease-in;
  }

  > section:nth-of-type(2) {
    animation-delay: 0.15s;
  }

  > section:nth-of-type(3) {
    animation-delay: 0.3s;
  }
`
export const AdditionalContent = styled.section`
  margin-top: ${({ theme }) => theme.spacing.sm};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CloseButton = styled(RoundButton)`
  background: transparent;
  color: ${({ theme }) => theme.colors.grey.regular};
  position: absolute;
  right: 0;
  top: 1rem;
  font-size: 2rem;
`
