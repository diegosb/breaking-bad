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
    listOfCharacters: [
      {
        char_id: 1,
        name: 'Walter White',
        birthday: '09-07-1958',
        occupation: ['High School Chemistry Teacher', 'Meth King Pin'],
        img:
          'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
        status: 'Presumed dead',
        nickname: 'Heisenberg',
        appearance: [1, 2, 3, 4, 5],
        portrayed: 'Bryan Cranston',
        category: 'Breaking Bad',
        better_call_saul_appearance: [],
      },
      {
        char_id: 2,
        name: 'Jesse Pinkman',
        birthday: '09-24-1984',
        occupation: ['Meth Dealer'],
        img:
          'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jesse_Pinkman2.jpg/220px-Jesse_Pinkman2.jpg',
        status: 'Alive',
        nickname: "Cap n' Cook",
        appearance: [1, 2, 3, 4, 5],
        portrayed: 'Aaron Paul',
        category: 'Breaking Bad',
        better_call_saul_appearance: [],
      },
      {
        char_id: 3,
        name: 'Skyler White',
        birthday: '08-11-1970',
        occupation: ['House wife', 'Book Keeper', 'Car Wash Manager', 'Taxi Dispatcher'],
        img: 'https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg',
        status: 'Alive',
        nickname: 'Sky',
        appearance: [1, 2, 3, 4, 5],
        portrayed: 'Anna Gunn',
        category: 'Breaking Bad',
        better_call_saul_appearance: [],
      },
      {
        char_id: 4,
        name: 'Walter White Jr.',
        birthday: '07-08-1993',
        occupation: ['Teenager'],
        img:
          'https://media1.popsugar-assets.com/files/thumbor/WeLUSvbAMS_GL4iELYAUzu7Bpv0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/01/12/910/n/1922283/fb758e62b5daf3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg',
        status: 'Alive',
        nickname: 'Flynn',
        appearance: [1, 2, 3, 4, 5],
        portrayed: 'RJ Mitte',
        category: 'Breaking Bad',
        better_call_saul_appearance: [],
      },
      {
        char_id: 5,
        name: 'Henry Schrader',
        birthday: 'Unknown',
        occupation: ['DEA Agent'],
        img:
          'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Hank_Schrader2.jpg/220px-Hank_Schrader2.jpg',
        status: 'Deceased',
        nickname: 'Hank',
        appearance: [1, 2, 3, 4, 5],
        portrayed: 'Dean Norris',
        category: 'Breaking Bad',
        better_call_saul_appearance: [],
      },
      {
        char_id: 6,
        name: 'Marie Schrader',
        birthday: 'Unknown',
        occupation: ['Housewife', 'Clepto'],
        img:
          'https://vignette.wikia.nocookie.net/breakingbad/images/1/10/Season_2_-_Marie.jpg/revision/latest?cb=20120617211645',
        status: 'Alive',
        nickname: 'Marie',
        appearance: [1, 2, 3, 4, 5],
        portrayed: 'Betsy Brandt',
        category: 'Breaking Bad',
        better_call_saul_appearance: [],
      },
    ],
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
