import React from 'react'
import { render, waitFor } from 'setupTests'
import userEvent from '@testing-library/user-event'
import { CharacterProvider } from 'store/CharacterContext'
import Characters from './index'

describe('Characters page', () => {
  const mockCharacters = [
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
  ]
  const setup = () => {
    const renderComponent = render(
      <CharacterProvider initialValue={mockCharacters}>
        <Characters />
      </CharacterProvider>,
    )

    const searchBar = renderComponent.getByLabelText('Search Character')
    return { ...renderComponent, searchBar }
  }

  it('Should show number of CharacterCard according characters props length', () => {
    const { getAllByTestId } = setup()
    expect(getAllByTestId('character-card')).toHaveLength(6)
  })

  it('Should show only cards with correspond search bar value', async () => {
    const { getByText, queryByText, getAllByTestId, searchBar } = setup()
    expect(searchBar).toBeInTheDocument()
    await userEvent.type(searchBar, 'heisenberg')
    const sayMyName = /heisenberg/i
    expect(getAllByTestId('character-card')).toHaveLength(1)
    expect(getByText(sayMyName)).toBeInTheDocument()
    expect(queryByText(/sky/i)).not.toBeInTheDocument()
  })

  it('Could search for character by name too', async () => {
    const { getAllByTestId, searchBar } = setup()
    await userEvent.type(searchBar, 'walter')
    expect(getAllByTestId('character-card')).toHaveLength(2)
  })
})
