import './App.css';

const filmsEndpoint = 'https://swapi.dev/api/films';

function App() {
  return (
    <div className="App">
      <h1>Star Wars Stars</h1>
      <p>See the stars of Star Wars!</p>
      <ul className="FilmsList">
        <li>
          <h2>Star Wars: A New Hope</h2>
          <h3>Featuring:</h3>
          <ul className="CharactersList">
            <li>Luke Skywalker</li>
            <li>Darth Vader</li>
            <li>And the whole gang!</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default App;
