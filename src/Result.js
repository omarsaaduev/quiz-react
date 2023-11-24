import React from "react";
import Game from "./Game";

export default function Result({correct, questions}) {
  function reload(){
    window.location.reload()
  }
  return (
    <div>
      <div className="result">
        <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
        <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
        <button onClick={reload}>Попробовать снова</button>
      </div>
    </div>
  );
}
