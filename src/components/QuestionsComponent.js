import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { clickButton } from '../actions';
import ClockComponent from './ClockComponent';

class QuestionsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assertions: 0,
      buttonClick: false,
      rightAnswerClicked: false,
      index: 0,
    };
    this.colorSelectCorrect = this.colorSelectCorrect.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  nextQuestion() {
    const btns = document.querySelectorAll('button');

    this.setState((prevState) => ({
      index: prevState.index + 1,
      rightAnswerClicked: false,
      buttonClick: false,
    }));
    btns.forEach((element) => {
      element.classList.remove('reveal-color');
    });
  }

  colorSelectCorrect({ target }) {
    const btns = document.querySelectorAll('button');

    if (target.value === 'correct') {
      this.setState((prevState) => ({
        assertions: prevState.assertions + 1,
        rightAnswerClicked: true,

      }
      ));
    }
    this.setState(() => ({
      buttonClick: true,
    }));
    btns.forEach((element) => {
      element.classList.add('reveal-color');
    });
  }

  render() {
    const { questions, loading, buttonDisable, updateClickButton } = this.props;
    const { results } = questions;
    const { buttonClick, rightAnswerClicked, index } = this.state;
    const updateButtonState = { buttonClick, rightAnswerClicked };
    updateClickButton(updateButtonState);
    return (
      <div>

        {loading
          ? <p>Carregando...</p>
          : (
            <div>
              <p data-testid="question-category">{ results[index].category }</p>
              <h4
                id="question"
                data-testid="question-text"
                difficulty={ results[index].difficulty }
              >
                { results[index].question }
              </h4>
              <button
                value="correct"
                data-testid="correct-answer"
                type="button"
                className="green-border"
                onClick={ (event) => this.colorSelectCorrect(event) }
                disabled={ buttonDisable }
              >
                { results[index].correct_answer }
              </button>
              { results[index].incorrect_answers.map((incorrect, indexKey) => (
                <button
                  data-testid={ `wrong-answer-${indexKey}` }
                  type="button"
                  key={ indexKey }
                  className="red-border"
                  onClick={ (event) => { this.colorSelectCorrect(event); } }
                  disabled={ buttonDisable }
                >
                  {incorrect}
                </button>
              ))}
              <ClockComponent nextQuestion={ this.nextQuestion } />
            </div>
          )}
      </div>
    );
  }
}

QuestionsComponent.propTypes = {
  questions: PropTypes.arrayOf().isRequired,
  loading: PropTypes.bool.isRequired,
  buttonDisable: PropTypes.func.isRequired,
  updateClickButton: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  questions: state.trivia.questions,
  loading: state.trivia.isLoading,
  buttonDisable: state.trivia.buttonDisable,
});

const mapDispatchToProps = (dispatch) => ({
  updateClickButton: (state) => dispatch(clickButton(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsComponent);