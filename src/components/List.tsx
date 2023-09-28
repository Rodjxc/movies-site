import { useEffect, useState } from "react";

export const List = ({ listadoState, setListadoState }) => {
  // Since the whole list of movies will be loading when the page loads, we need to also get, update and refresh the list.
  // The whole list, will be a useState but since it needs to be synced with the app.tsx, we'll execute teh useState there,
  // but do the logic here. That's why we commented

  //             vvvvvvv

  // const [listadoState, setListadoState] = useState([]);

  // We're using a useEffect to load once, when the page loads, all the movies saved in the local storage get transformed into an object

  useEffect(() => {
    getTheMovies();
  }, []);

  const getTheMovies = () => {
    let movies = JSON.parse(localStorage.getItem("movies"));

    // Will trigger the useState and will send it the list of movies (that previously we retrieved from the local storage)
    setListadoState(movies);
  };

  return (
    // Here we return on that component, all the {movie} stored in the LS, in a piece of HTML
    <>
      {listadoState != null ? (
        listadoState.map((movie) => {
          return (
            <article key={movie.id} className="movie-item">
              <h3 className="title">{movie.title}</h3>
              <p className="description">{movie.description}n</p>
              <button className="edit">Edit</button>
              <button className="delete">Delete</button>
            </article>
          );
        })
      ) : (
        <h3>No movies to be shown. Please add some on the side panel</h3>
      )}
    </>
  );
};
