import React from "react";
import "./App.css";

function App() {
  console.log(process.env.NODE_ENV);
  return (
    <main
      className={process.env.NODE_ENV === "development" ? "debug-screens" : ""}
    >
      Victor Crest 26 London 80K Followers 803K Likes 1.4K Photos
      <div className="attribution">
        <p>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            rel="noreferrer"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/Ullvang">Jon Erik Ullvang</a>.
        </p>
      </div>
    </main>
  );
}

export default App;
