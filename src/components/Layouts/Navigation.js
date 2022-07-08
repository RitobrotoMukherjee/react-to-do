import { Link } from 'react-router-dom';

const Navigation = () => (
  <header>
    <nav>
      <ul className="Menu">
        <li className="MenuItems">
          <Link to="/">Todo List</Link>
        </li>
        <li className="MenuItems">
          <Link to="about">About</Link>
        </li>
        <li className="MenuItems">
          <Link to="author">Author</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
