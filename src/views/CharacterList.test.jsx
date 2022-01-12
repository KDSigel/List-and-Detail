
import { render, screen } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'


const server = setupServer(
    rest.get('https://last-airbender-api.herokuapp.com/api/v1/characters', (req, res, ctx) => {
    return res(
        ctx.json([
            {
              "_id": "5cf5679a915ecad153ab68c8",
              "allies": [
                "Royal Earthbender Guards"
              ],
              "enemies": [
                "Chin"
              ],
              "photoUrl": "https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441",
              "name": "46th Earth King",
              "affiliation": " Earth Kingdom Earth Kingdom Royal Family"
            },
            {
              "_id": "5cf5679a915ecad153ab68c9",
              "allies": [
                "Appa"
              ],
              "enemies": [
                "Azula"
              ],
              "photoUrl": "https://vignette.wikia.nocookie.net/avatar/images/a/ae/Aang_at_Jasmine_Dragon.png/revision/latest?cb=20130612174003",
              "name": "Aang",
              "affiliation": " Air Acolytes Air Nomads Air Scouts (formerly) Team Avatar"
            },
            {
              "_id": "5cf5679a915ecad153ab68ca",
              "allies": [
                "Gyatso"
              ],
              "enemies": [
                "Ozai"
              ],
              "photoUrl": "https://vignette.wikia.nocookie.net/avatar/images/2/21/Into_The_Inferno_Aang.png/revision/latest?cb=20131009060746",
              "name": "Aang (games)",
              "affiliation": " Air Nomads Team Avatar"
            }])
    )
        }
    )
)
    
describe('characterlist', () => {
    
        beforeAll(() => {
            server.listen()
        })
    
        afterAll(() => {
            server.close()
        })

it('renders the character list detail view', async () => {

render(
    <MemoryRouter initialEntries={['/']}>
        <App />
    </MemoryRouter>
)

screen.getByText('loading stuff 4 you')
await screen.findByText('46th Earth King')
})
})