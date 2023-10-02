import { useEffect, useState } from "react";
import { Edit } from "./Edit";

export const List = ({ listadoState, setListadoState }) => {
  // Since the whole list of movies will be loading when the page loads, we need to also get, update and refresh the list.
  // The whole list, will be a useState but since it needs to be synced with the app.tsx, we'll execute teh useState there,
  // but do the logic here. That's why we commented

  //             vvvvvvv

  // const [listadoState, setListadoState] = useState([]);

  const [edit, setEdit] = useState(0);

  // We're using a useEffect to load once, when the page loads, all the movies saved in the local storage get transformed into an object

  useEffect(() => {
    getTheMovies();
  }, []);

  const getTheMovies = () => {
    let movies = JSON.parse(localStorage.getItem("movies"));

    // Will trigger the useState and will send it the list of movies (that previously we retrieved from the local storage)
    setListadoState(movies);
    return movies;
  };

  // Function to delete the movie. We need to find in the local storage what movie we want to delete, and that's why we give them an
  // id.

  const deleteMovie = (id: number) => {
    // In order to delete them we need. 1- Get the stored movies
    // we're doing that above, getting the movies from the LS.
    let storedMovies = getTheMovies();
    // 2- Filter those movies to delete the one I don't want, and leave the rest
    let new_array_movies = storedMovies.filter(
      (movie: string) => movie.id !== parseInt(id)
    );
    // 3- Update the status of the list
    setListadoState(new_array_movies);
    // 4- Update the data in the localStorage
    localStorage.setItem("movies", JSON.stringify(new_array_movies));
  };

  return (
    // Here we return on that component, all the {movie} stored in the LS, in a piece of HTML
    <>
      {listadoState != null ? (
        listadoState.map((movie) => {
          return (
            <article key={movie.id} className="movie-item">
              <h3 className="title">{movie.title}</h3>
              <p className="description">{movie.description}</p>
              <button
                className="edit"
                onClick={() => {
                  setEdit(movie.id);
                }}
              >
                Edit
              </button>
              <button
                className="delete"
                onClick={() => {
                  deleteMovie(movie.id);
                }}
              >
                Delete
              </button>

              {/* The edit form appears */}
              {edit === movie.id && (
                <Edit
                  movie={movie}
                  getTheMovies={getTheMovies}
                  setEdit={setEdit}
                  setListadoState={setListadoState}
                />
              )}
            </article>
          );
        })
      ) : (
        <h4>No movies to be shown. Please add some on the side panel</h4>
      )}
    </>
  );
};
