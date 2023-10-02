import { useState } from "react";

export const Searchbar = ({ listadoState, setListadoState }) => {
  const [busqueda, setBusqueda] = useState("");
  // we added this to show a message when the item searched isn't found
  const [notFound, setNotFound] = useState(false);

  // ### and we start with the logic of the searchbar
  const searchMovie = (e) => {
    // Create state and update it
    setBusqueda(e.target.value);
    // The full list of movies (we import it from the props and pass it as argument for Searchbar)

    // With this list, filter it to find the coincidence to what I'm looking for
    let foundMovies = listadoState.filter((movie) => {
      return movie.title.toLowerCase().includes(busqueda.toLowerCase());
    });
    // (this if is to prevent looking for things on the local storage when we're only putting 1 character or when the movie doesn't match)
    if (busqueda.length <= 1 || foundMovies <= 0) {
      foundMovies = JSON.parse(localStorage.getItem("movies"));
      setNotFound(true);
    } else {
      setNotFound(false);
    }

    // Update the state of the main list with what I've been able to filter (to update the movies displayed in the list)
    setListadoState(foundMovies);
  };

  return (
    <div className="search">
      <h3 className="title">Search: {busqueda}</h3>
      {notFound == true && busqueda.length > 1 && (
        <span className="not-found">Unable to find the movie</span>
      )}
      <form>
        <input
          type="text"
          placeholder="Search..."
          name="search"
          autoComplete="off"
          value={busqueda}
          onChange={searchMovie}
        />
        <button type="button">🔎</button>
      </form>
    </div>
  );
};
