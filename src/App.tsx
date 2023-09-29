import "./index.css";
import { List } from "./components/List";
import { Searchbar } from "./components/Searchbar";
import { Creator } from "./components/Creator";
import { useState } from "react";

function App() {
  // In order to send the information from the List to be updated when we create a new movie, we have to refresh it from the main
  // component, the App.tsx. So we import it here and the pass on the props on the component

  const [listadoState, setListadoState] = useState([]);

  return (
    <>
      <div className="layout">
        {/* Header */}
        <header className="header">
          <div className="logo">
            <div className="play"></div>
          </div>
          <h1>MovieTrack</h1>
        </header>

        {/* Navbar */}

        <nav className="nav">
          <ul>
            <li>
              <a href="">Main</a>
            </li>
            <li>
              <a href="">Movies</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
        {/* Main content*/}
        <section className="content">
          {/*We pass the 2 props for the state of List to refresh*/}

          <List listadoState={listadoState} setListadoState={setListadoState} />
        </section>

        {/* SIDEBAR  */}
        <aside className="sidebar">
          <Searchbar />
          <Creator setListadoState={setListadoState} />
        </aside>
        {/* Footer */}
        <footer className="footer">&copy; Rod J, MovieTrack</footer>
      </div>
    </>
  );
}

export default App;
