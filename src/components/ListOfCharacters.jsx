import { Link } from 'react-router-dom';

export default function ListOfCharacters({characters}) {
    return (
        <ul>
            {characters.map((character) => (
                <li key={character._id}>
                    <Link to={`/character/${character._id}`}>
                    <img src={character.photoUrl} alt={character.name} width="200" />
                    <div>{character.name}</div>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
