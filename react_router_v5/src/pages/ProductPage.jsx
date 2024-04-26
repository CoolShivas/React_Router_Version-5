import {Link} from "react-router-dom";

const ProductPage = () => {
  return (
    <section>
      <h2> This is a Product Page. </h2>
      <ul>
        <li> <Link to="/products/p1"> A Book </Link> </li>
        <li> <Link to="/products/p2"> Shirt </Link> </li>
        <li> <Link to="/products/p3"> Laptop </Link> </li>
      </ul>
    </section>
  )
}

export default ProductPage