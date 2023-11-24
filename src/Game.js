import React from "react";

export default function Game({question, onClickVar,questions,step}) {
    const percentage = Math.round(step/questions.length *100)
  return (
    <div>
      <>
        <div className="progress">
          <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
          {
            question.variants.map((variant,index) => (
                <li onClick = {() => onClickVar(index)} key={variant}>{variant}</li>
            ))
          }
        </ul>
      </>
    </div>
  );
}
