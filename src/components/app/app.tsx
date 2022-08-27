import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';
import AuthScreen from '../auth-screen/auth-screen';
import GameOverScreen from '../game-over-screen/game-over-screen';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import WelcomeScreenn from '../welcome-screen/welcome-screen';
import WinScreen from '../win-screen/win-screen';

type AppScreenProps = {
  errorsCount: number;
}

function App({errorsCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<WelcomeScreenn errorsCount={errorsCount} />}
        />
        <Route
          path={AppRoute.DevArtist}
          element={<ArtistQuestionScreen />}
        />
        <Route
          path={AppRoute.DevGenre}
          element={<GenreQuestionScreen />}
        />
        <Route
          path={AppRoute.Login}
          element={<AuthScreen />}
        />
        <Route
          path={AppRoute.Lose}
          element={<GameOverScreen />}
        />
        <Route
          path={AppRoute.Result}
          element={<WinScreen />}
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
