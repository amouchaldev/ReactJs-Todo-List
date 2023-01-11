import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
      <li className="nav-item" role="presentation">
        <NavLink
          className={(navData) => `nav-link ${navData.isActive && "active"}`}
          to=""
          role="tab"
        >
          All
        </NavLink>
      </li>
      <li className="nav-item" role="presentation">
        <NavLink
          className={(navData) => `nav-link ${navData.isActive && "active"}`}
          to="/completed"
          role="tab"
        >
          Completed
        </NavLink>
      </li>
      <li className="nav-item" role="presentation">
        <NavLink
          className={(navData) => `nav-link ${navData.isActive && "active"}`}
          to="/uncompleted"
          role="tab"
        >
          Uncompleted
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
