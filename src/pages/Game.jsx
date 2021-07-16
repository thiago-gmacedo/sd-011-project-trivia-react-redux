/* eslint-disable max-lines-per-function */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/TriviaGame.css';
import { fetchAPI, getQuestions } from '../services/QuestionsAPI';
import {getPlayerInfo} from '../services/trivia'
import { Header, ShowTrivia } from '../components';
import { paintButtons, nextQuestion, randomArray } from '../components/GameFunctions';

const time = 5;

export default function Game() {
  const dispatch = useDispatch();

  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState('');
  const [answer, setAnswer] = useState('');
  const [arrayQuestions, setArray] = useState('');
  const [player, setPlayer] = useState({
    player: { name: '', gravatarEmail: '', score: 0, assertions: 0 },
  });
  const [count, setCount] = useState(true);
  const [counter, setCounter] = useState(time);
  const loginState = useSelector((state) => state.login);

  useEffect(() => {
    dispatch(fetchAPI(loginState.token));
  }, []);

  const gameState = useSelector((state) => state.game);

  useEffect(() => {
    (async () => {
      const { token } = loginState;
      const response = await getQuestions(token);
      setQuestions(response);
    })();
  }, []);

  useEffect(() => {
    getPlayerInfo(setPlayer)
    // (async () => {
    //   const { email, name } = loginState;
    //   const state = {
    //     name,
    //     gravatarEmail: email,
    //     assertions: 0,
    //     score: 0,
    //   };
    //   setPlayer({ player: state });
    // })();
  }, []);

  useEffect(() => {
    localStorage.state = JSON.stringify(player);
  }, [player]);

  useEffect(() => randomArray(questions, setArray, index), [questions, index]);

  const showResults = (e) => {
    setAnswer(e);
    paintButtons(arrayQuestions);
  };

  const props = {
    index,
    questions,
    arrayQuestions,
    showResults,
    answer,
    nextQuestion,
    setAnswer,
    setIndex,
    setPlayer,
    player,
    count,
    setCount,
    counter,
    setCounter,
  };

  return (
    <>
      <Header { ...props } />
      {questions && <ShowTrivia { ...props } />}
    </>
  );
}
