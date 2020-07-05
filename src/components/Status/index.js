import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import colors from 'theme/colors'

const Tag = styled.span`
  background: ${({ status }) => STATUS_COLOR[status].background};
  color: ${({ status }) => STATUS_COLOR[status].color};
  font-size: 0.75rem;
  padding: 4px 6px;
  border-radius: 4px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  text-transform: uppercase;
`

const STATUS_COLOR = {
  'Presumed dead': {
    color: colors.grey.dark,
    background: colors.secondary.background,
  },
  Alive: {
    color: colors.white,
    background: colors.primary.background,
  },
  Deceased: {
    color: colors.white,
    background: colors.error.background,
  },
}

const Status = ({ status }) => <Tag status={status}>{status}</Tag>

Status.propTypes = {
  status: PropTypes.string.isRequired,
}

export default Status
