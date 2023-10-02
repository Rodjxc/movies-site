import { useState } from "react";
import { SaveInStorage } from "../helpers/SaveInStorage";

export const Creator = ({ setListadoState }) => {
  const title_section = "Add a movie";
  const [movieState, setMovieState] = useState({
    title: "",
    description: "",
  });

  const getFormValues = (e: ChangeEvent<HTMLInputElement>) => {
    let previousElements = JSON.parse(localStorage.getItem("movies"));

    // The prevent default is to prevent the form reloading the screen
    e.preventDefault();

    //get the data from the form
    const target = e.target;
    const title = target.title.value;
    const description = target.description.value;

    //Create object of the movie to save

    const movie = {
      // as Id we use the date that it was created. That's because it'll never be the same so it'll save as a different object
      id: new Date().getTime(),
      title,
      description,
    };

    // Set the state to the newly created movie
    setMovieState(movie);

    //Now we update the state of the main list with the newly created movie. If the array is empty, spreads and adds the movie (active if
    // there's a movie already inside) and if not, it initializes the listadoState as an array containing the new movie

    setListadoState((elementos) => {
      if (Array.isArray(elementos)) return [...elementos, movie];
      else {
        return [movie];
      }
    });

    // Save in the local storage the movie. Since we can only save strings or numbers in the local storage, we have to transform
    // the object movie, into a string.

    SaveInStorage("movies", movie);
  };

  return (
    <div className="add">
      <h3 className="title">{title_section}</h3>
      <form onSubmit={getFormValues}>
        <input type="text" placeholder="Title of the Movie" name="title" />
        <textarea placeholder="Comments" name="description"></textarea>
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};
