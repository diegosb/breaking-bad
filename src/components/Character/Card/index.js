import React from 'react'
import { Flipped } from 'react-flip-toolkit'
import { onPressEnterKey } from 'utils/keyboard'
import { createCardFlipId, shouldFlip } from 'utils/cardFlip'
import Avatar from '../Avatar'
import Description from '../Description'
import { Card, CardContent, ExpandButton } from './styles'

const CharacterCard = ({ index, onClick, item }) => {
  const flipId = createCardFlipId(index)
  function onClickHandler() {
    onClick(index)
  }

  return (
    <Flipped flipId={flipId} stagger="card" shouldInvert={shouldFlip(index)}>
      <Card
        role="button"
        tabIndex={0}
        onKeyDown={(e) => onPressEnterKey(e, onClickHandler)}
        onClick={onClickHandler}
      >
        <Flipped inverseFlipId={flipId}>
          <CardContent>
            <Flipped
              flipId={`avatar-${index}`}
              stagger="card-content"
              shouldFlip={shouldFlip(index)}
              delayUntil={flipId}
            >
              <Avatar src={item.img} alt={item.name} loading="lazy" />
            </Flipped>
            <Flipped
              flipId={`description-${index}`}
              stagger="card-content"
              shouldFlip={shouldFlip(index)}
              delayUntil={flipId}
            >
              <Description nickname={item.nickname} name={item.name} />
            </Flipped>
            <ExpandButton aria-label="Expand details" onClick={onClickHandler}>
              +
            </ExpandButton>
          </CardContent>
        </Flipped>
      </Card>
    </Flipped>
  )
}

CharacterCard.propTypes = {}
CharacterCard.defaultProps = {}

export default CharacterCard
