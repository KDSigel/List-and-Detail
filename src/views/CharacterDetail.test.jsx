
import { render, screen } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'


const server = setupServer(
    rest.get('https://last-airbender-api.herokuapp.com/api/v1/characters/5cf5679a915ecad153ab68c9', (req, res, ctx) => {
    return res(
        ctx.json({
            "allies": [
              "Appa"
            ],
            "enemies": [
              "Azula"
            ],
            "_id": "5cf5679a915ecad153ab68c9",
            "photoUrl": "https://vignette.wikia.nocookie.net/avatar/images/a/ae/Aang_at_Jasmine_Dragon.png/revision/latest?cb=20130612174003",
            "name": "Aang",
            "gender": "Male",
            "eye": "Gray",
            "hair": "Dark brown ",
            "skin": "Light",
            "love": "Katara ",
            "weapon": "The elements",
            "profession": " Air Nomad culture teacher Airbending instructor Avatar Monk",
            "position": " Co-founder of the United Republic of Nations Fully Realized Avatar",
            "predecessor": "Roku",
            "affiliation": " Air Acolytes Air Nomads Air Scouts (formerly) Team Avatar",
            "first": "\""
          })
    )
        }
    )
)
    
describe('characterdetail', () => {
    
        beforeAll(() => {
            server.listen()
        })
    
        afterAll(() => {
            server.close()
        })

it('renders the character detail view', async () => {

render(
    <MemoryRouter initialEntries={['/character/5cf5679a915ecad153ab68c9']}>
        <App />
    </MemoryRouter>
)

screen.getByText('loading')
await screen.findByText('name: Aang')
})
})