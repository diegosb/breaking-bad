import styled from '@emotion/styled'

export default styled.img`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.grey.light};
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
`
