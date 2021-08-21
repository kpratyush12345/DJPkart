import "./App.css";
import { useEffect, useState } from "react";
import LandingPage from "./pages/landing-page";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer/Footer";
import ProductPage from "./pages/productpage/ProductPage";
import CartPage from "./pages/cart";
import OrderPage from "./pages/orderpage/OrderPage";

function App() {
  const checkSignedIn = localStorage.getItem("isSignedIn");
  const [isSignedIn, setIsSignedIn] = useState(checkSignedIn);
  useEffect(() => {
    if (!localStorage.getItem("cartItems"))
      localStorage.setItem("cartItems", JSON.stringify([]));
    if (!localStorage.getItem("orderItems"))
      localStorage.setItem("orderItems", JSON.stringify([]));
  }, []);

  function signIn() {
    setIsSignedIn(!isSignedIn);
  }

  useEffect(() => {
    localStorage.setItem("isSignedIn", isSignedIn);
  }, [isSignedIn]);

  console.log("IsSignedIn ", isSignedIn);
  return (
    <div className="App">
      <Navbar isSignedIn={isSignedIn} signIn={signIn} />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/products/:id">
          <ProductPage />
        </Route>
        <Route exact path="/cart">
          <CartPage />
        </Route>
        <Route exact path="/orders">
          <OrderPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
