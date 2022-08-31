import {Questions} from '../types/question';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const questions: Questions = [
  {
    type: 'genre',
    genre: 'rock',
    answers: [{
      src: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg',
      genre: 'rock',
    }, {
      src: 'https://9.react.pages.academy/static/music/Manic_No_Depression.mp3',
      genre: 'blues',
    }, {
      src: 'https://9.react.pages.academy/static/music/Say_Yeah.mp3',
      genre: 'jazz',
    }, {
      src: 'https://9.react.pages.academy/static/music/Kurt.mp3',
      genre: 'rock',
    }],
  }, {
    type: 'artist',
    song: {
      artist: 'Jim Beam',
      src: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg',
    },
    answers: [{
      picture: `${AVATAR_URL}?rnd=${Math.random()}`,
      artist: 'John Snow',
    }, {
      picture: `${AVATAR_URL}?rnd=${Math.random()}`,
      artist: 'Jack Daniels',
    }, {
      picture: `${AVATAR_URL}?rnd=${Math.random()}`,
      artist: 'Jim Beam',
    }],
  },
];
