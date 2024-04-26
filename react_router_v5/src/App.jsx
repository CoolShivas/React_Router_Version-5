import ProductDetails from "./pages/ProductDetails";
import MainHeader from "./components/Header/MainHeader";
import ProductPage from "./pages/ProductPage";
import WelcomePage from "./pages/WelcomePage";
import { Route } from "react-router-dom";
// import Navbar from "./components/Header/Navbar";
// import AppName from "./components/AppName";

function App() {
  return (
    <>
      <header>
       <MainHeader></MainHeader>
        {/* <AppName></AppName> */}
      </header>
      <main>
         {/* Starting of URL by writing http://localhost:5173/welcome */}
         <Route path="/welcome">
          <WelcomePage></WelcomePage>
        </Route>
        <Route path="/products">
          <ProductPage></ProductPage>
        </Route>
        <Route path="/product-details/:productId">
          <ProductDetails></ProductDetails>
        </Route>

        {/* Ending of URL */}
      </main>
      <footer></footer>
    </>
  );
}

export default App;


// // our-domain.com/welcome -> Welcome Component
// // our-domain.com/product -> Product Component
// // our-domain.com/product-details/:productId -> anything 