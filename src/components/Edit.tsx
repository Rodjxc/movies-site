export const Edit = ({ movie, getTheMovies, setEdit, setListadoState }) => {
  const tiulo_componente = "Edit Movie";

  const saveEdit = (e, id) => {
    e.preventDefault();
    // In order to get the edited value, and replace it on the original, I need to: 1- Get the target of the event
    let target = e.target;
    //2-  Find the ID of the object of the movie to edit (inside the LS). To do that, we pass as prop in List.tsx the const to
    // be able to retrieve the movies from the LS, because we need to get the id of the object we want to update
    const storedMovies = getTheMovies();
    // once we have the function here, we renamed it and we have to find the id

    const index = storedMovies.findIndex((movie) => movie.id === id);

    // Create object with that ID, with title and description from the form. And save the new objecto, into movie

    let updated_movie = {
      id,
      title: target.title.value,
      description: target.description.value,
    };

    // Update the element with that ID, so overwrite movie with updated_movie

    storedMovies[index] = updated_movie;

    // save the new array of objects in LS and update states

    localStorage.setItem("movies", JSON.stringify(storedMovies));

    // and update the states

    setListadoState(storedMovies);
    // We change the setEdit to let the component know that is not needed anymore and it can be closed
    setEdit(0);
  };

  return (
    <div className="edit_form">
      <h3 className="title">{tiulo_componente}</h3>
      <form
        className="form"
        onSubmit={(e) => {
          saveEdit(e, movie.id);
        }}
      >
        <input
          type="text"
          name="title"
          className="edited_title"
          defaultValue={movie.title}
        />
        <textarea
          name="description"
          defaultValue={movie.description}
          className="edited_description"
        />
        <input type="submit" className="editar" value="Update" />
      </form>
    </div>
  );
};
