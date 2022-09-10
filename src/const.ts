export const FIRST_GAME_STEP = 0;
export const MAX_MISTAKE_COUNT = 3;

export const BACKEND_URL = 'https://9.react.pages.academy/guess-melody';
export const REQUEST_API_TIMEOUT = 5000;
export const AUTH_TOKEN_KEY_NAME = 'guess-melody-token';

export const TIMEOUT_SHOW_ERROR = 2000;

export enum AppRoute {
  Login = '/login',
  Lose = '/lose',
  Result = '/result',
  Root = '/',
  NotFound = '*',
  Game = '/game',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum GameType {
  Artist = 'artist',
  Genre = 'genre',
}

export enum ApiRoute {
  Questions = '/questions',
  Login = '/login',
  Logout = '/logout',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}
