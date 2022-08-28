import {ChangeEvent, FormEvent, useState} from 'react';
import {QuestionGenre, UserGenreQuestionAnswer} from '../../types/question';
import Logo from '../logo/logo';

type GenreQuestionScreenProps = {
  question: QuestionGenre
  onAnswer: (question: QuestionGenre, answer: UserGenreQuestionAnswer) => void
}

function GenreQuestionScreen(props: GenreQuestionScreenProps): JSX.Element {
  const {question, onAnswer} = props;
  const {answers, genre} = question;
  const [userAnswers, setUserAnswers] = useState([false, false, false, false]);

  return (
    <section className="game game--genre">
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
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form className="game__tracks" onSubmit={
          (evt: FormEvent) => {
            evt.preventDefault();
            onAnswer(question, userAnswers);
          }
        }
        >
          {answers.map((answer, i) => (
            <div className="track" key={answer.src}>
              <button className="track__button track__button--play" type="button"></button>
              <div className="track__status">
                <audio src={answer.src}></audio>
              </div>
              <div className="game__answer">
                <input className="game__input visually-hidden"
                  type="checkbox"
                  name="answer"
                  value={`answer-${i}`}
                  id={`answer-${i}`}
                  checked={userAnswers[i]}
                  onChange={(evt: ChangeEvent<HTMLInputElement>) => {
                    const value = evt.target.checked;
                    setUserAnswers([
                      ...userAnswers.slice(0, i),
                      value,
                      ...userAnswers.slice(i + 1)
                    ]);
                  }}
                />
                <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
              </div>
            </div>
          ))}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>
  );
}

export default GenreQuestionScreen;
