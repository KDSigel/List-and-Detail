import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'

it('tests that the header shows up', () => {
const {container} = render(
    <MemoryRouter>
        <Header />
    </MemoryRouter>

)

expect(container).toMatchSnapshot()
}
)