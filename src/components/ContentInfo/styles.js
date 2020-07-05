import styled from '@emotion/styled'

export const InfoBlock = styled.div``

export const ContentLabel = styled.small`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.secondary.regular};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.font.weight.bold};
`

export const ContentValue = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.grey.dark};
`
