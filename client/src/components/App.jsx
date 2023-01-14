import React from 'react';
import axios from 'axios';
import MovieList from './MovieList.jsx';
import UserInput from './UserInput.jsx';

const useEffect = React.useEffect;
const useState = React.useState;


const App = (props) => {

  ///// STATE DATA PIECES /////
  const [allMovies, setAllMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [unWatched, setUnWatched] = useState([]);

  ///// CURRENT RENDERED MOVIES - PRIMARY STATE /////
  const [currentMovies, setCurrentMovies] = useState([]);



  ///// EVENT HANDLERS /////
  const handleSearch = (event)=> {
    const inputField = event.target.previousSibling
    const searchTerm = inputField.value;
    if (searchTerm.length) {
      let matches = [];
      for (let movie of allMovies) {
        if (movie.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          matches.push(movie);
        }
      }
      if (!matches.length) {
        alert(`No movies matching ${searchTerm} found. Please try again!`);
      } else {
        setCurrentMovies(matches);
      }
      inputField.value = '';
    } else {
      alert('Please enter a movie title to search for.');
    }
  };

  const handleAddMovie = (event) => {

  };

  const handleWatchButton = (event) => {

  };

  const handleDisplayWatched = (event) => {

  };



  ///// HTTP REQUEST HANDLERS /////
  const url = 'http://127.0.0.1:3000/api';

  const initialize = () => {
    axios.get(url + '/movies')
      .then((res) => {
        setCurrentMovies(res.data); // - render the page with all movies stored on the database - //
        setAllMovies(res.data); // - store all movie data to avoid unnecessary client/server interactions - //
      }
    );
  };

  ///// INITIALIZES THE APP /////
  useEffect(initialize, []);

  return (
    <div>
      <UserInput handleSearch={handleSearch} />
      <MovieList movies={currentMovies} />
    </div>
  )
};

export default App;