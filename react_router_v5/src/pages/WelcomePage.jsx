import { Route } from "react-router-dom";

const WelcomePage = () => {
  return (
    <section>
      <h2> This is a Welcome Page. </h2>
      <Route path="/welcome/new-user">
        <p> Welcome, new user! </p>
      </Route>
    </section>
  )
}

export default WelcomePage