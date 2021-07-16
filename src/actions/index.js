export const LOGIN = 'LOGIN';
export const GET_SCORE = 'GET_SCORE';
export const RESET_STATE = 'RESET_STATE';

export function getLogin(name, email) {
  return {
    type: LOGIN,
    name,
    email,
  };
}

export function playerScore(score) {
  return {
    type: GET_SCORE,
    score,
  };
}

export function resetState() {
  return {
    type: RESET_STATE,
  };
}
