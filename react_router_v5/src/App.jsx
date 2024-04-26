import ErrorPage from "./pages/ErrorPage";
import ProductDetails from "./pages/ProductDetails";
import MainHeader from "./components/Header/MainHeader";
import ProductPage from "./pages/ProductPage";
import WelcomePage from "./pages/WelcomePage";
import { Route, Switch, Redirect } from "react-router-dom";
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
        <Switch>
          <Route path="/welcome">
            <WelcomePage></WelcomePage>
          </Route>
          <Route exact path="/products">
            <ProductPage></ProductPage>
          </Route>
          <Route path="/products/:productId">
            <ProductDetails></ProductDetails>
          </Route>
          {/* Use any one from Redirect or Route Error. Both can't we use parallelly obly one at a time. */}
          <Redirect to="/welcome"></Redirect>

          {/* <Route to="*">
            <ErrorPage></ErrorPage>
          </Route> */}
        </Switch>

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
