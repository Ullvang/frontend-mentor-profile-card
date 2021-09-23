import React from "react";
import Background from "./Background";
import Person from "./images/image-victor.jpg";
import "./App.css";

function App() {
  return (
    <>
      <Background />
      <main
        className={`min-h-screen w-screen px-4 flex justify-between 
        items-center flex-col text-center
        ${process.env.NODE_ENV === "development" ? " debug-screens" : ""}`}
      >
        <div></div>
        <div
          className={`z-10 w-76 overflow-hidden relative
         bg-white rounded-xl h-80`}
        >
          <div className="h-28 bg-cardPattern"></div>
          <img
            src={Person}
            className="relative mx-auto border-4 border-white border-solid rounded-full bottom-picture"
            alt="Victor"
          />
          <div className="relative m-5 bottom-picture">
            <h1 className="font-bold">
              Victor Crest
              <span className="inline font-normal text-gray ">&nbsp;26</span>
            </h1>
            <h2 className="text-xs text-gray">London</h2>
          </div>
          <div className="absolute bottom-0 flex justify-around w-full p-5 text-xs border-t-2">
            <p>
              <span>80K</span>
              Followers
            </p>
            <p>
              <span>803K</span>
              Likes
            </p>
            <p>
              <span>1.4K</span>
              Photos
            </p>
          </div>
        </div>
        <div className="attribution justify-self-end">
          <p className="text-white">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              rel="noreferrer"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="https://github.com/Ullvang">Jon Erik Ullvang</a>
            .
          </p>
        </div>
      </main>
    </>
  );
}

export default App;
