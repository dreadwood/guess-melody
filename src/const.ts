export const FIRST_GAME_STEP = 0;
export const MAX_MISTAKE_COUNT = 3;

export const AUTH_TOKEN_KEY_NAME = 'guess-melody-token';

export enum AppRoute {
  Login = '/login',
  Lose = '/lose',
  Result = '/result',
  Root = '/',
  NotFound = '*',
  Game = '/game'
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
