import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Character from './Character'

it('tests a snapshot of Character component', () => {

const character = {
    name: 'karl',
    position: 'driver',
    allies: 'cohort',
    photoUrl: 'https://en.wikipedia.org/wiki/Vasily_Arkhipov#/media/File:Vasili_Arkhipov_young.jpg'
}

const {container} = render(
    <MemoryRouter>
        <Character character={character}/>
    </MemoryRouter>

)

expect(container).toMatchSnapshot()
}
)