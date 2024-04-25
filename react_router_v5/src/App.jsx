import ProductPage from "./pages/ProductPage";
import WelcomePage from "./pages/WelcomePage";
import { Route } from "react-router-dom";
// import Navbar from "./components/Header/Navbar";
import AppName from "./components/AppName";

function App() {
  return (
    <>
      <header>
        {/* Starting of URL by writing http://localhost:5173/welcome */}
        <Route path="/welcome">
          <WelcomePage></WelcomePage>
        </Route>
        <Route path="/products">
          <ProductPage></ProductPage>
        </Route>
        {/* Ending of URL */}
        <AppName></AppName>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}

export default App;
