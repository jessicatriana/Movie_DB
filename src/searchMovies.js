import React from "react";

export default function SearchMovies() {
  const searchMovies = async (event) => {
    event.preventDefault();
    console.log("submitting");

    const query = "Jurassic Park";

    const url = `https://api.themoviedb.org/3/search/movie?api_key=0b3fc42b91303295625171df7628e7ce&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="form" onSubmit={searchMovies}>
      <label className="label" htmlFor="query">
        {" "}
        Movie Name
      </label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="i.e. Jurassic Park"
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}
