import { useEffect, useState } from "react";

const movies = [
  { title: "Inception", genere: "Fantascienza" },
  { title: "Il Padrino", genere: "Thriller" },
  { title: "Titanic", genere: "Romantico" },
  { title: "Batman", genere: "Azione" },
  { title: "Interstellar", genere: "Fantascienza" },
  { title: "Pulp Fiction", genere: "Thriller" },
];

const generi = ["Generi...", "Fantascienza", "Thriller", "Romantico", "Azione"];

// export
export default function Main() {
  const [genreStatus, selectGenere] = useState("");
  const [filteredMovies, selectfilteredMovies] = useState(movies);

  // effect
  useEffect(() => {
    const newfilteredMovies = movies.filter((movie) =>
      movie.genere.includes(genreStatus)
    );
    selectfilteredMovies(newfilteredMovies);
    console.log(filteredMovies);
  }, [genreStatus]);
  return (
    <>
      <div className="container">
        <div className="row g-2 my-2 mt-5">
          {filteredMovies.map((movie, i) => {
            return (
              <div key={i} className="col-4">
                <div className="card">
                  <div className="card-head text-center p-2">
                    {"Titolo = " + movie.title}
                  </div>
                  <hr />
                  <div className="card-body text-center ">
                    {"Genere = " + movie.genere}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="card">
        <label htmlFor="disabledSelect" className="form-label p-2">
          Scegli un genere
        </label>
        <select
          id="disabledSelect"
          className="form-select"
          aria-placeholder="Scegli un genere"
          value={""}
          onChange={(e) => selectGenere(e.target.value)}
        >
          {generi.map((g, i) => {
            return (
              <option key={i} value={g}>
                {g}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}
