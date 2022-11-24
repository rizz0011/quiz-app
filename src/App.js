import Start from "./Componenta/start";
import Quiz from "./Componenta/quiz";
import Result from "./Componenta/result";
import QuizHolder from "./Contex/quizHolder";
import { Context } from "./Contex/quizHolder";
import { useContext } from "react";

function App() {
  const { start, exit } = useContext(Context);

  return (
    <div>
      {exit === false ?
      <>
      {start === true ? <Quiz /> : <Start />}
      </>
      :
       <Result /> }
    </div>
  );
}

export default App;
