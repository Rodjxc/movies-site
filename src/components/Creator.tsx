import { useState } from "react";

export const Creator = () => {
  const title_section = "Add Movie";
  const [movieState, setMovieState] = useState({
    title: "",
    description: "",
  });

  const getFormValues = (e: React.FormEvent<HTMLFormElement>) => {
    // The prevent default is to prevent the form reloading the screen
    e.preventDefault();

    //get the data from the form
    const target = e.target;
    let title = target.title.value;
    let description = target.description.value;

    //Create object of the movie to save

    const movie = {
      // as Id we use the date that it was created. That's because it'll never be the same so it'll save as a different object
      id: new Date().getTime(),
      title,
      description,
    };

    // Set the state to the newly created movie
    setMovieState(movie);

    // Save in the local storage the movie. Since we can only save strings or numbers in the local storage, we have to transform
    // the object movie, into a string.

    const saveInStorage = (movie) => {
      // Get the elements in LocalStorage. Since they're stored there, we need to transform them back into an object (oposite of stringify)

      let elements = JSON.parse(localStorage.getItem("movies"));

      console.log(elements);

      // Check if it's an array, because if it's not I have to create it from scratch

      if (Array.isArray(elements)) {
        // Add a new element if it's an array
        elements.push(movie);
      } else {
        // if it's not an array, create one with the new movie
        elements = [movie];
      }

      // Save in LocalStorage

      localStorage.setItem("movies", JSON.stringify(elements));
      // Return Object

      return movie;
    };

    saveInStorage(movie);
  };

  return (
    <div className="add">
      <h3 className="title">{title_section}</h3>
      <form onSubmit={getFormValues}>
        <input type="text" placeholder="Title" name="title" />
        <textarea placeholder="Description" name="description"></textarea>
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};
