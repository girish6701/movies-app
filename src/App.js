import "./App.css";
import Banner from "./components/Banner";
import Favourites from "./components/Favourites";
import MoviesList from "./components/MoviesList";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <MoviesList />
            </>
          }
        />
        <Route path="/favourites" element={<Favourites />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
