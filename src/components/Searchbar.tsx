export const Searchbar = () => {
  return (
    <div className="search">
      <h3 className="title">Search for a movie</h3>
      <form>
        <input type="text" placeholder="Search..." />
        <button type="button">🔎</button>
      </form>
    </div>
  );
};
