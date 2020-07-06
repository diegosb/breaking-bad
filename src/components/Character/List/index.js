import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Flipper } from 'react-flip-toolkit'
import UL from 'components/List'
import ExpandedCard from '../ExpandedCard'
import Card from '../Card'

const CharactersList = ({ characters }) => {
  const [focused, setFocused] = useState(null)

  function onClick(index) {
    setFocused(focused === index ? null : index)
  }

  return (
    <Flipper
      flipKey={focused}
      spring="veryGentle"
      staggerConfig={{
        card: {
          reverse: focused !== null,
        },
      }}
      decisionData={focused}
    >
      <UL>
        {characters.map((character) => {
          const isExpanded = character.char_id === focused
          return (
            <li key={character.char_id} aria-expanded={isExpanded}>
              {isExpanded ? (
                <ExpandedCard index={focused} onClick={onClick} item={character} />
              ) : (
                <Card
                  item={character}
                  index={character.char_id}
                  key={character.char_id}
                  onClick={onClick}
                />
              )}
            </li>
          )
        })}
      </UL>
    </Flipper>
  )
}
CharactersList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default CharactersList
