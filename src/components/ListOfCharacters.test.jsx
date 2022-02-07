// add a fake list of characters

import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ListOfCharacters from './ListOfCharacters'

it('tests a snapshot of Characters component', () => {

const characters = [{
    _id: 123,
    name: 'karl',
    position: 'driver',
    allies: 'cohort',
    photoUrl: 'https://en.wikipedia.org/wiki/Vasily_Arkhipov#/media/File:Vasili_Arkhipov_young.jpg'
}]

const {container} = render(
    <MemoryRouter>
        <ListOfCharacters characters={characters}/>
    </MemoryRouter>

)

expect(container).toMatchSnapshot()
}
)