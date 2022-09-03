import {createReducer} from '@reduxjs/toolkit';
import {FIRST_GAME_STEP} from '../const';
import { isAnswerCorrect } from '../game';
import {checkUserAnswer, incrementStep, resetGame} from './action';

const STEP_COUNT = 1;
const MISTAKE_COUNT = 1;

const initialState = {
  mistakes: 0,
  step: FIRST_GAME_STEP,
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
      state.mistakes = initialState.mistakes;
      state.step = initialState.step;
    });
});
