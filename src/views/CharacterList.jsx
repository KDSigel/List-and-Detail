import { useEffect, useState } from 'react';
import ListOfCharacters from '../components/ListOfCharacters';
import { getCharacters } from '../services/Avatar.Api';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAllCharacters = async () => {
      const returnedCharacters = await getCharacters();
      setCharacters(returnedCharacters);
      setLoading(false);
    };
    loadAllCharacters();
  }, []);

  return (
    <>
      {loading ? (
        <h2>loading stuff 4 you</h2>
      ) : (
        <ListOfCharacters characters={characters} />
      )}
    </>
  );
}
