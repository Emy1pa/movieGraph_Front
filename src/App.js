import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about us/About";
import Movies from "./pages/movies/Movies";
import ContactUs from "./pages/contact us/ContactUs";
import Login from "./pages/forms/Login";
import Register from "./pages/forms/Register";
import Movie from "./pages/movies/Movie";
import ForgotPassword from "./pages/password/ForgotPassword";
import CheckEmail from "./pages/password/CheckEmail";
import ResetPassword from "./pages/password/ResetPassword";
import Success from "./pages/password/Success";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route
          path="/password/reset-password/:userId/:token"
          element={<ResetPassword />}
        />

        <Route path="/check-email" element={<CheckEmail />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
