import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

import movies from "./assets/db/Movies.js";

export default function App() {
  return (
    <>
      <Header />
      <Main movies={movies} />
      <Footer />
    </>
  );
}
