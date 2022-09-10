import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {ApiRoute, AuthorizationStatus} from '../const';
import {removeToken, saveToken} from '../services/token';
import {AuthData} from '../types/auth-data';
import {Questions} from '../types/question';
import {AppDispatch, State} from '../types/state';
import {UserData} from '../types/user-data';
import {loadQuestions, requireAuthorization} from './action';

type ApiConfigAction = {
  dispatch: AppDispatch
  state: State
  extra: AxiosInstance
}

export const fetchQuestionAction = createAsyncThunk<void, undefined, ApiConfigAction>(
  'data/fetchQuestion',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Questions>(ApiRoute.Questions);
    dispatch(loadQuestions(data));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, ApiConfigAction>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    await api.get(ApiRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  }
);

export const loginAction = createAsyncThunk<void, AuthData, ApiConfigAction>(
  'user/login',
  async({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(ApiRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, ApiConfigAction>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ApiRoute.Logout);
    removeToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
);
