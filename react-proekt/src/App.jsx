import { useState } from "react";
import "./App.css";
import Home from "./examples/lecture 8/pages/home";
import { Route, Routes } from "react-router-dom";
import About from "./examples/lecture 8/pages/about";
import Contact from "./examples/lecture 8/pages/contact";
import Navbar from "./examples/lecture 8/components/navbar";
import Authentication from "./examples/lecture 8/pages/authentication";
import SignIn from "./examples/lecture 8/pages/signIn";
import SignUp from "./examples/lecture 8/pages/signUp";
import User from "./examples/lecture 8/pages/user";
import NotFound from "./examples/lecture 8/pages/notFound";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<Authentication />}>
          <Route
            path="signin"
            element={
              <SignIn isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
            }
          />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="/user/:id" element={<User/>} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}
export default App;
