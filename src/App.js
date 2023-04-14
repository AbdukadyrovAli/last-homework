import { useState } from "react";
import "./App.css";
import {Header} from "./components/header/Header";
import {Modalka} from "./components/modalka/Modalka";
import {MovieItem} from "./components/movieItem/MovieItem";

function App() {
  const [modal, setModal] = useState(false);
  const [movie, setMovie] = useState([
    {
      title: "Ali",
      url: "",
      rating: "5",
      id: "01",
    },
  ]);

  function removeHandler(id) {
    const remove = movie.filter((i) => i.id !== id);
    setMovie(remove);
  }


  function addMovieHandler(data) {
    const addedMovie = [...movie, data];
    setMovie(addedMovie);
  }

  function openModalHandler() {
    setModal(!modal);
  }

  return (
    <>
      <div className="App">
        <Header modal={modal} onClick={openModalHandler} />
      </div>
      {modal && <Modalka addMovie={addMovieHandler}  onClose={openModalHandler} />}

      <div>
        {movie.map((el) => (
          <MovieItem
          modal={modal} setModal={setModal}
            removeHandler={removeHandler}
            key={el.id}
            id={el.id}
            title={el.title}
            rating={el.rating}
            url={el.url}
          />
        ))}
      </div>
    </>
  );
}

export default App;
