import React from "react";
import { createContext } from "react";
import { quizData1 } from "../Componenta/dummyData";

const Context = createContext();


function QuizHolder(props) {
  const [start, setStart] = React.useState(false);
  const [exit, setExit] = React.useState(false);
  const [correct, setCorrect] = React.useState(0);

  let quizData =  quizData1.sort(() => Math.random() - Math.random()).slice(0, 10)

  return (
    <Context.Provider
      value={{
        start,
        exit,
        setExit,
        setStart,
        quizData,
        correct,
        setCorrect,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default QuizHolder;

export { Context };
