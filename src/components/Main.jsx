import { useState } from "react";

const movies = [
  { title: "Inception", genre: "Fantascienza" },
  { title: "Il Padrino", genre: "Thriller" },
  { title: "Titanic", genre: "Romantico" },
  { title: "Batman", genre: "Azione" },
  { title: "Interstellar", genre: "Fantascienza" },
  { title: "Pulp Fiction", genre: "Thriller" },
];

useState;

// export
export default function Main() {
  return (
    <>
      <div className="container">
        <div className="row g-2 my-2 mt-5">
          {movies.map((movie, i) => {
            return (
              <div className="col-4">
                <div className="card">
                  <div className="card-head text-center p-2">
                    {"Titolo = " + movie.title}
                  </div>
                  <hr />
                  <div className="card-body text-center ">
                    {"Genere = " + movie.genre}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="card">
        <label for="disabledSelect" class="form-label p-2">
          Scegli un genere
        </label>
        <select
          id="disabledSelect"
          class="form-select"
          aria-placeholder="Scegli un genere"
        >
          {movies.map((generi, i) => {
            return (
              <option>
                <ul>
                  <li>{generi.genre}</li>
                </ul>
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}
