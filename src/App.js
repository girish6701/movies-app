import "./App.css";
import Banner from "./components/Banner";
import Favourites from "./components/Favourites";
import MoviesList from "./components/MoviesList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      {/* <Banner />
      <MoviesList /> */}
      <Favourites />
    </>
  );
}

export default App;
