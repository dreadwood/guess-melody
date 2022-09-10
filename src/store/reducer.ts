import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus, FIRST_GAME_STEP} from '../const';
import {isAnswerCorrect} from '../game';
import {Questions} from '../types/question';
import {checkUserAnswer, incrementStep, loadQuestions, requireAuthorization, resetGame, setError} from './action';

const STEP_COUNT = 1;
const MISTAKE_COUNT = 1;

type InitialState = {
  step: number
  mistakes: number
  questions: Questions
  authorizationStatus: AuthorizationStatus
  isDataLoaded: boolean
  error: string
}

const initialState: InitialState = {
  step: FIRST_GAME_STEP,
  mistakes: 0,
  questions: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  error: '',
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
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(loadQuestions, (state, action) => {
      state.questions = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(resetGame, (state) => {
      state.step = initialState.step;
      state.mistakes = initialState.mistakes;
    });
});
