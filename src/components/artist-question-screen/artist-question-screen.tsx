import { ChangeEvent } from 'react';
import {QuestionArtist, UserArtistQuestionAnswer} from '../../types/question';
import AudioPlayer from '../audio-player/audio-player';
import Logo from '../logo/logo';

type ArtistQuestionScreenProps = {
  question: QuestionArtist
  onAnswer: (question: QuestionArtist, answer: UserArtistQuestionAnswer) => void
}

function ArtistQuestionScreen(props: ArtistQuestionScreenProps): JSX.Element {
  const {question, onAnswer} = props;
  const {song, answers} = question;

  return (
    <section className="game game--artist">
      <header className="game__header">
        <Logo />

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
            style={{
              filter: 'url(#blur)',
              transform: 'rotate(-90deg) scaleY(-1)',
              transformOrigin: 'center',
            }}
          />
        </svg>

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <AudioPlayer src={song.src} />
          </div>
        </div>

        <form className="game__artist">
          {answers.map((answer, i) => (
            <div className="artist" key={answer.artist}>
              <input className="artist__input visually-hidden"
                type="radio"
                name="answer"
                value={`answer-${i}`}
                id={`answer-${i}`}
                onChange={
                  (evt: ChangeEvent<HTMLInputElement>) => {
                    evt.preventDefault();
                    onAnswer(question, answer.artist);
                  }
                }
              />
              <label className="artist__name" htmlFor={`answer-${i}`}>
                <img className="artist__picture" src={answer.picture} alt={answer.artist} />
                {answer.artist}
              </label>
            </div>
          ))}
        </form>
      </section>
    </section>
  );
}

export default ArtistQuestionScreen;
