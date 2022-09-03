export type GenreAnswer = {
  src: string
  genre: string
}

export type ArtistAnswer = {
  picture: string
  artist: string
}

export type QuestionGenre = {
  type: 'genre'
  genre: string
  answers: GenreAnswer[],
}

export type QuestionArtist = {
  type: 'artist'
  song: {
    artist: string
    src: string
  },
  answers: ArtistAnswer[]
}

export type Question = QuestionArtist | QuestionGenre;

export type Questions = Question[];

export type UserGenreQuestionAnswer = readonly boolean[];

export type UserArtistQuestionAnswer = string;

export type UserAnswer = UserArtistQuestionAnswer | UserGenreQuestionAnswer;
