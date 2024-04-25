import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <ul>
        <li>
            {/* <a href="/welcome"> Welcome </a> */}
            <Link to="/welcome"> Welcome </Link>
        </li>
        <li>
            {/* <a href="/products"> Products </a> */}
            <Link to="/products"> Products </Link>
        </li>
    </ul>
  )
}

export default MainHeader