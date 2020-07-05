import React from 'react'
import PropTypes from 'prop-types'
import { ContentLabel, InfoBlock, ContentValue } from './styles'

const ContentInfo = ({ label, value }) => (
  <InfoBlock>
    <ContentLabel>{label}</ContentLabel>
    <ContentValue>{value}</ContentValue>
  </InfoBlock>
)

ContentInfo.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
}

export default ContentInfo
