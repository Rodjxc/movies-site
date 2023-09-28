// This helper we'll use it to save things in the local storage. We used it to create and add movies, but we'll
// make it a helper in case we want to use it for other things

// We pass 2 parameters, the name of the item we want to save (the key, what it is), and then the item itself. When we call the
// function we also need to pass 2 values: where does it go in the local storage (key), and the item itself.

export const SaveInStorage = (key, item) => {
  // Get the elements in LocalStorage. Since they're stored there, we need to transform them back into an object (oposite of stringify)

  let elements = JSON.parse(localStorage.getItem(key)); // we get the key we're trying to access.

  console.log(elements);

  // Check if it's an array, because if it's not I have to create it from scratch

  if (Array.isArray(elements)) {
    // Add a new element if it's an array
    elements.push(item);
  } else {
    // if it's not an array, create one with the new item
    elements = [item];
  }

  // Save in LocalStorage

  localStorage.setItem(key, JSON.stringify(elements));
  // Return Object

  return item;
};
