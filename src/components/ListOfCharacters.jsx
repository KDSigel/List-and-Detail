import { Link } from 'react-router-dom';

export default function ListOfCharacters({characters}) {
    return (
        <ul>
            {characters.map((character) => (
                <li>
                    <Link to={`/character/${character._id}`}>
                    <img src={character.photoUrl} alt={character.name} width="200" />
                    <div>name: {character.name}</div>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
