import React from 'react'

const CharacterStateContext = React.createContext({})
const CharacterDispatchContext = React.createContext({})

export const actionTypes = {
  ADD_CHARACTERS_LIST: '@character/addList',
}

function characterReducer(state, action) {
  switch (action.type) {
    case actionTypes.ADD_CHARACTERS_LIST: {
      return { listOfCharacters: action.payload }
    }
    default: {
      throw new Error(`Action type not found: ${action.type}`)
    }
  }
}

function CharacterProvider({ children }) {
  const [state, dispatch] = React.useReducer(characterReducer, {
    listOfCharacters: [],
  })

  return (
    <CharacterStateContext.Provider value={state}>
      <CharacterDispatchContext.Provider value={dispatch}>
        {children}
      </CharacterDispatchContext.Provider>
    </CharacterStateContext.Provider>
  )
}
function useCharacterState() {
  return React.useContext(CharacterStateContext)
}

function useCharacterDispatch() {
  return React.useContext(CharacterDispatchContext)
}

export { CharacterProvider, useCharacterState, useCharacterDispatch }
