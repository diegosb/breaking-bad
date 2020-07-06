import React, { useRef } from 'react'
import { Flipped } from 'react-flip-toolkit'
import { format } from 'date-fns'
import { onPressEscKey } from 'utils/keyboard'
import { createCardFlipId } from 'utils/cardFlip'
import Status from 'components/Status'
import ContentInfo from 'components/ContentInfo'
import Avatar from '../Avatar'
import {
  AdditionalContent,
  ExpandedCard,
  ExpandedCardContent,
  CharacterDetails,
  CloseButton,
} from './styles'
import Description from '../Description'

const ExpandedCharacterCard = ({ index, onClick, item }) => {
  const expandedCard = useRef(null)
  const flipId = createCardFlipId(index)
  function onClickHandler() {
    onClick(index)
  }

  function showComponentTimeout(cb) {
    setTimeout(() => {
      cb()
    }, 600)
  }

  function renderArrayText(array) {
    if (!array.length) {
      return null
    }
    return array.map((occ, i) => {
      if (i === array.length - 1) {
        return `${occ}`
      }
      return `${occ}, `
    })
  }

  function formatDateInfo(date) {
    if (date === 'Unknown') {
      return date
    }
    return format(new Date(item.birthday), 'dd/MM/yyyy')
  }

  return (
    <Flipped
      flipId={flipId}
      stagger="card"
      onStart={(el) => {
        showComponentTimeout(() => {
          el.classList.add('animated-in')
          if (expandedCard.current) {
            expandedCard.current.focus()
          }
        })
      }}
    >
      <ExpandedCard
        role="button"
        tabIndex={0}
        onKeyDown={(e) => onPressEscKey(e, onClickHandler)}
        onClick={onClickHandler}
        ref={expandedCard}
        data-testid="expanded-card"
      >
        <Flipped inverseFlipId={flipId}>
          <ExpandedCardContent>
            <Flipped flipId={`avatar-${index}`} stagger="card-content" delayUntil={flipId}>
              <Avatar src={item.img} alt={item.nickname} size="large" loading="lazy" />
            </Flipped>
            <Flipped flipId={`description-${index}`} stagger="card-content" delayUntil={flipId}>
              <CharacterDetails>
                <Description nickname={item.nickname} name={item.name} />
                <CloseButton onClick={onClickHandler} aria-label="Close">
                  -
                </CloseButton>
                <AdditionalContent>
                  <ContentInfo label="Born in" value={formatDateInfo(item.birthday)} />
                  <ContentInfo label="Portrayed by" value={item.portrayed} />
                </AdditionalContent>
                <AdditionalContent>
                  <ContentInfo label="Occupation" value={renderArrayText(item.occupation)} />
                </AdditionalContent>
                <AdditionalContent>
                  <ContentInfo
                    label="Status"
                    value={<Status status={item.status}>{item.status}</Status>}
                  />
                  <ContentInfo label="Appear in seasons" value={renderArrayText(item.appearance)} />
                </AdditionalContent>
              </CharacterDetails>
            </Flipped>
          </ExpandedCardContent>
        </Flipped>
      </ExpandedCard>
    </Flipped>
  )
}

export default ExpandedCharacterCard
