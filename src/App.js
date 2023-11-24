import { useState } from 'react';
import Game from './Game';
import Result from './Result';
import './index.scss';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];





function App() {
  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)
  const question = questions[step]

  function onClickVar(index) {
        if(index === question.correct ){
          setCorrect(correct + 1)
        }
        console.log(index, question.correct )
        setStep(step + 1)
  }

  return (
    <div className="App">
      {
        step != questions.length ?
        <Game step={step} questions={questions} question = {question} onClickVar={onClickVar} />
        :  <Result questions={questions} correct = {correct} /> 
      }
    </div>
  );
}

export default App;
