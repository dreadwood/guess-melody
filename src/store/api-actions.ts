import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {store} from '.';
import {ApiRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR} from '../const';
import {errorHandle} from '../services/error-handle';
import {removeToken, saveToken} from '../services/token';
import {AuthData} from '../types/auth-data';
import {Questions} from '../types/question';
import {AppDispatch, State} from '../types/state';
import {UserData} from '../types/user-data';
import {loadQuestions, redirectToRoute, requireAuthorization, setError} from './action';

type ApiConfigAction = {
  dispatch: AppDispatch
  state: State
  extra: AxiosInstance
}

export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  () => {
    setTimeout(() => {
      store.dispatch(setError(''));
    }, TIMEOUT_SHOW_ERROR);
  }
);

export const fetchQuestionAction = createAsyncThunk<void, undefined, ApiConfigAction>(
  'data/fetchQuestion',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Questions>(ApiRoute.Questions);
      dispatch(loadQuestions(data));
    } catch (error) {
      errorHandle(error);
    }
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, ApiConfigAction>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(ApiRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, ApiConfigAction>(
  'user/login',
  async({login: email, password}, {dispatch, extra: api}) => {
    try {
      const {data: {token}} = await api.post<UserData>(ApiRoute.Login, {email, password});
      saveToken(token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(redirectToRoute(AppRoute.Result));
    } catch (error) {
      errorHandle(error);
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);

export const logoutAction = createAsyncThunk<void, undefined, ApiConfigAction>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.delete(ApiRoute.Logout);
      removeToken();
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  }
);
