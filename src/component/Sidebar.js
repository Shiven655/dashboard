import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="/">
            <i className="fa fa-home" aria-hidden="true"></i>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/articles">
            <i className="fa fa-newspaper-o" aria-hidden="true"></i>
            <span>Articles</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/people">
            <i className="fa fa-user" aria-hidden="true"></i>
            <span>People</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/books">
            <i className="fa fa-book" aria-hidden="true"></i>
            <span>Books</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/help">
            <i className="fa fa-question-circle" aria-hidden="true"></i>
            <span>Help & Support</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
