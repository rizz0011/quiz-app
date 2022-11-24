import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import QuizHolder from "./Contex/quizHolder";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QuizHolder>
    <App />
  </QuizHolder>
);
