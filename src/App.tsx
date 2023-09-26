import "./index.css";
import { List } from "./components/List";
import { Searchbar } from "./components/Searchbar";
import { Creator } from "./components/Creator";

function App() {
  return (
    <>
      <div className="layout">
        {/* Header */}
        <header className="header">
          <div className="logo">
            <div className="play"></div>
          </div>
          <h1>My Movies</h1>
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
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
        {/* Main content*/}
        <section className="content">
          <List />
        </section>

        {/* SIDEBAR  */}
        <aside className="sidebar">
          <Searchbar />
          <Creator />
        </aside>
        {/* Footer */}
        <footer className="footer">
          &copy; Rod Jimeno, JS Master ES12 & TS
        </footer>
      </div>
    </>
  );
}

export default App;
