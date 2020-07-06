import React, { useState, useMemo, useEffect } from 'react'
import styled from '@emotion/styled'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { getAllCharacters } from 'services/characters'
import useFetch from 'hooks/useFetch'
import SearchBar from 'components/SearchBar'
import CharactersList from 'components/Character/List'
import { useCharacterDispatch, useCharacterState, actionTypes } from 'store/CharacterContext'
import colors from 'theme/colors'

const ListContainer = styled.section`
  width: 100%;
  max-width: 600px;
`

const Index = () => {
  const [searchName, setSearchName] = useState('')
  const { listOfCharacters } = useCharacterState()
  const dispatch = useCharacterDispatch()
  const hasCachedCharacters = listOfCharacters.length > 1
  const { response: allCharacters, loading } = useFetch(
    hasCachedCharacters ? null : getAllCharacters,
  )

  useEffect(() => {
    if (allCharacters) {
      dispatch({ type: actionTypes.ADD_CHARACTERS_LIST, payload: allCharacters })
    }
  }, [dispatch, allCharacters])

  const filterCharactersByNameSearch = useMemo(() => {
    if (!searchName) {
      return listOfCharacters
    }

    return listOfCharacters.filter(
      (character) =>
        character.name.match(new RegExp(searchName, 'i')) ||
        character.nickname.match(new RegExp(searchName, 'i')),
    )
  }, [listOfCharacters, searchName])

  return (
    <ListContainer>
      <SearchBar
        onChange={(e) => setSearchName(e.target.value)}
        value={searchName}
        placeholder="Search for character nickname or name..."
        disabled={loading}
      />
      <SkeletonTheme color={colors.grey.light} highlightColor={colors.white}>
        {loading || !listOfCharacters.length ? (
          <Skeleton count={4} height={130} style={{ marginTop: '1.65rem' }} />
        ) : (
          <CharactersList characters={filterCharactersByNameSearch} />
        )}
      </SkeletonTheme>
    </ListContainer>
  )
}

export default Index
