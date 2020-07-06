import styled from '@emotion/styled'
import { RoundButton } from 'components/Button'
import media from 'theme/media'

export const Card = styled.div`
  width: 100%;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: visible;
  border: none;
  border-radius: 4px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 2px 4px 2px rgba(9, 48, 9, 0.18);
    :focus {
      outline: none;
      box-shadow: 0 2px 14px 6px rgba(200,150,62, 0.85);
    }
  }
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`

export const ExpandButton = styled(RoundButton)`
  margin-left: auto;
  margin-right: 2rem;
  ${media.xs`
    display: none;
  `};
`
