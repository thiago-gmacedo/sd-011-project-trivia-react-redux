import React from 'react';
import PropTypes from 'prop-types';
// import { GameStateContext } from '../pages/Game';

export default function ShowTrivia(props) {
  const { index,
    questions,
    arrayQuestions,
    showQuestions,
    showResults,
    answer,
    nextQuestion,
    setAnswer,
    setIndex } = props;

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h3>
            <span className="label label-warning gameIndex" data-testid="question-text">
              {index + 1}
            </span>
            {questions[index].question}
          </h3>
          Functions: PropTypes.func.isRequired,
          onChange: PropTypes.func.isRequired,
          <p data-testid="question-category">{questions[index].category}</p>
        </div>
        {arrayQuestions && showQuestions(arrayQuestions, showResults)}

        {answer && (
          <button
            type="button"
            onClick={ () => nextQuestion(setAnswer, index, questions, setIndex) }
            className="btn btn btn-info btn-lg nextQuestion"
            data-testid="btn-next"
          >
            Próxima pergunta
          </button>
        )}

        <div className="modal-footer text-muted">
          <span id="answer" />
        </div>
      </div>
    </div>
  );
}
ShowTrivia.propTypes = {
  index: PropTypes.number.isRequired,
  questions: PropTypes.objectOf(PropTypes.object).isRequired,
  arrayQuestions: PropTypes.shape({}).isRequired,
  answer: PropTypes.objectOf(PropTypes.object).isRequired,
  nextQuestion: PropTypes.func.isRequired,
  setIndex: PropTypes.func.isRequired,
  showQuestions: PropTypes.func.isRequired,
  showResults: PropTypes.func.isRequired,
  setAnswer: PropTypes.func.isRequired,

};