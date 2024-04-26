import classes from "./MainHeader.module.css";
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <nav className={classes.mainheader_nav}>
        <ul className={classes.mainheader_ul}>
        <li>
            {/* <a href="/welcome"> Welcome </a> */}
            {/* Anchor Tag always refreshes the page and loading spinner rotates; */}
            {/* <Link to="/welcome"> Welcome </Link> */}
            {/* Link Tag doesn't refreshes the page and loading spinner always steady; */}
            <NavLink activeClassName={classes.active} to="/welcome"> Welcome </NavLink>
            {/* NavLink is same as Link Tag but also provide the facility of CSS classes */}
        </li>
        <li>
            {/* <a href="/products"> Products </a> */}
            {/* <Link to="/products"> Products </Link> */}
            <NavLink activeClassName={classes.active} to="/products"> Products </NavLink>
        </li>
    </ul>
    </nav>
  )
}

export default MainHeader;