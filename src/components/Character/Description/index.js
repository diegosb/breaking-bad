import React from 'react'
import PropTypes from 'prop-types'
import { Details, Nickname, Name } from './styles'

const Description = ({ name, nickname }) => (
  <Details>
    <Nickname>{nickname}</Nickname>
    <Name>{name}</Name>
  </Details>
)
Description.propTypes = {
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
}
Description.defaultProps = {}

export default Description
