import styled from '@emotion/styled'
import media from 'theme/media'

export const HeaderWrapper = styled.header`
  width: 100vw;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  ${media.xs`
    height: 6rem;
    padding: 1rem 0;
  `};
`
