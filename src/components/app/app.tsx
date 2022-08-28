import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {QuestionArtist, QuestionGenre, Questions} from '../../types/question';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';
import AuthScreen from '../auth-screen/auth-screen';
import GameOverScreen from '../game-over-screen/game-over-screen';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import WelcomeScreenn from '../welcome-screen/welcome-screen';
import WinScreen from '../win-screen/win-screen';

type AppScreenProps = {
  errorsCount: number
  questions: Questions
}

function App({errorsCount, questions}: AppScreenProps): JSX.Element {
  const [firstQuestion, secondQuestion] = questions;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<WelcomeScreenn errorsCount={errorsCount} />}
        />
        <Route
          path={AppRoute.DevArtist}
          element={
            <ArtistQuestionScreen
              question={secondQuestion as QuestionArtist}
            />
          }
        />
        <Route
          path={AppRoute.DevGenre}
          element={
            <GenreQuestionScreen
              question={firstQuestion as QuestionGenre}
            />
          }
        />
        <Route
          path={AppRoute.Login}
          element={<AuthScreen />}
        />
        <Route
          path={AppRoute.Lose}
          element={
            <GameOverScreen />
          }
        />
        <Route
          path={AppRoute.Result}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <WinScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
