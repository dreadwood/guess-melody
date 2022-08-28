export type GenreAnswer = {
  src: string
  genre: string
}

export type ArtistAnswer = {
  picture: string
  artist: string
}

export type QuestionGenre = {
  type: string
  genre: string
  answers: GenreAnswer[],
}

export type QuestionArtist = {
  type: string
  song: {
    artist: string
    src: string
  },
  answers: ArtistAnswer[]
}

export type Question = QuestionArtist | QuestionGenre;

export type Questions = Question[];