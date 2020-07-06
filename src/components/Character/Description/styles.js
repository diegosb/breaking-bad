import styled from '@emotion/styled'
import media from 'theme/media'

export const Details = styled.div``
export const Nickname = styled.h3`
  color: ${({ theme }) => theme.colors.primary.dark};
  font-size: 2.35rem;
  line-height: 1.15;
  ${media.xs`
    font-size: 2rem;
  `}
`
export const Name = styled.h4`
  color: ${({ theme }) => theme.colors.grey.regular};
  letter-spacing: 0.5px;
  font-size: 1.05rem;
  line-height: 1.25;
  text-transform: uppercase;
  ${media.xs`
    font-size: 0.9rem;
  `}
`
