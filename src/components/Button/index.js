import styled from '@emotion/styled'

export const RoundButton = styled.button`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  outline: none;
  border: none;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.secondary.dark};
  cursor: pointer;
  :focus {
    box-shadow: 0 0 8px 4px rgba(200, 150, 62, 0.85);
  }
`
