import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import media from 'theme/media'

const SearchInput = styled.input`
  width: 100%;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.primary.dark};
  outline: none;
  padding: ${({ theme }) => theme.spacing.xs};
  ::placeholder {
    color: ${({ theme }) => theme.colors.grey.regular};
  }
  ${media.xs`
    font-size: 1rem;
   `};
`

const SearchBar = ({ onChange, value, ...props }) => (
  <SearchInput onChange={onChange} value={value} aria-label="Search Character" {...props} />
)

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default SearchBar
