import {Route, Routes} from 'react-router-dom';
import browserHistory from '../../browser-history';
import {AppRoute, MAX_MISTAKE_COUNT} from '../../const';
import {isCheckedAuth} from '../../game';
import {useAppSelector} from '../../hooks';
import AuthScreen from '../auth-screen/auth-screen';
import GameOverScreen from '../game-over-screen/game-over-screen';
import GameScreen from '../game-screen/game-screen';
import HistoryRoute from '../history-route/history-route';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import WelcomeScreenn from '../welcome-screen/welcome-screen';
import WinScreen from '../win-screen/win-screen';


function App(): JSX.Element {
  const {authorizationStatus, isDataLoaded} = useAppSelector((state) => state);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRoute history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<WelcomeScreenn errorsCount={MAX_MISTAKE_COUNT} />}
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
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <WinScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Game}
          element={<GameScreen />}
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFoundScreen />}
        />
      </Routes>
    </HistoryRoute>
  );
}

export default App;
