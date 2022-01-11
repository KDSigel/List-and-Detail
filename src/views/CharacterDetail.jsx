import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Character from '../components/Character'
import { getCharacter } from '../services/Avatar.Api'

export default function CharacterDetail() {

    const [character, setCharacter] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams();

    useEffect(() => {
    const loadNewCharacter = async () => {
        const returnedCharacter = await getCharacter(id)
        setCharacter(returnedCharacter)
        setLoading(false)
    }   
    loadNewCharacter()
    }, [id])
    

    return (
        <div>
            {loading 
            ? <h1>loading</h1>
            : <Character character={character}/>}
        </div>
    )
}
