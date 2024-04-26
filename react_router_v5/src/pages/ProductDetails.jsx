import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  console.log(productId);
  return (
    <>
      <h2>ProductDetails</h2>
      <p> {productId} </p>
    </>
  );
};

export default ProductDetails;
