import styled from '@emotion/styled'
import media from 'theme/media'

export default styled.img`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.grey.light};
  object-fit: cover;
  ${({ size }) => {
    if (size === 'large') {
      return `
          width: 250px;
          height: 360px;
          margin: 0 1rem 0 0;
        `
    }
    return `
          width: 105px;
          height: 150px;
          margin: 0 2rem 0 1rem;

      `
  }};
  ${({ size }) => {
    if (size === 'large') {
      return media.xs`
          width: 90vw;
          height: 450px;
          margin: 0;
        `
    }
    return media.xs`
          margin: 0 1rem 0 0.5rem;
      `
  }};
`
