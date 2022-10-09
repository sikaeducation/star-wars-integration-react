import './App.css';
import {useEffect, useState} from 'react';

const filmsEndpoint = 'https://swapi.dev/api/films';
const parseJSON = response => response.json();
const unique = (list, item) => [...(new Set([...list, item]))];
const exists = x => x;

function App() {
  const [films, setFilms] = useState([])
  const [characters, setCharacters] = useState([])
  const [error, setError] = useState(null)

  const filmsWithCharacters = films.map(film => ({
    ...film,
    characters: film.characters.map(characterUrl => (
      characters.find(character => character.url === characterUrl)
    )).filter(exists)
  }))

  // Get films
  useEffect(() => {
    fetch(filmsEndpoint)
      .then(parseJSON)
      .then(response => setFilms(response.results))
      .catch(setError)
  }, [])

  // Get characters when films update
  useEffect(() => {
    if (films.length > 0) {
      const requests = films
        .flatMap(film => film.characters)
        .reduce(unique, [])
        .map(characterUrl => fetch(characterUrl).then(parseJSON))

      Promise.all(requests)
        .then(setCharacters)
        .catch(setError)
    }
  }, [films])

  return (
    <div className="App">
      <h1>Star Wars Stars</h1>
      <p>See the stars of Star Wars!</p>
      {error
        ? (<p>There was a problem processing this request: <code>{error.message}</code></p>)
        : (<ul className="FilmsList">
          {filmsWithCharacters.map(({title, characters}) => (
            <li key={title}>
              <h2>{title}</h2>
              {characters.length > 0
                ? <>
                  <h3>Featuring:</h3>
                  <ul className="CharactersList">
                    {characters.map(({name}) => (
                      <li key={name}>{name}</li>
                    ))}
                  </ul>
                </>
                : <p>Characters loading...</p>
              }
            </li>
          ))}
        </ul>)
      }
    </div>
  );
}

export default App;
