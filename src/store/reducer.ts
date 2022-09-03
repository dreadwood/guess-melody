import {createReducer} from '@reduxjs/toolkit';
import {FIRST_GAME_STEP} from '../const';
import {isAnswerCorrect} from '../game';
import {questions} from '../mocks/questions';
import {checkUserAnswer, incrementStep, resetGame} from './action';


const STEP_COUNT = 1;
const MISTAKE_COUNT = 1;

const initialState = {
  step: FIRST_GAME_STEP,
  mistakes: 0,
  questions,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(incrementStep, (state) => {
      state.step += STEP_COUNT;
    })
    .addCase(checkUserAnswer, (state, action) => {
      const {question, userAnswer} = action.payload;
      state.mistakes += isAnswerCorrect(question, userAnswer) ? 0 : MISTAKE_COUNT;
    })
    .addCase(resetGame, (state) => {
      state.step = initialState.step;
      state.mistakes = initialState.mistakes;
    });
});
