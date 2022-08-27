import WelcomeScreenn from '../welcome-screen/welcome-screen';

type AppScreenProps = {
  errorsCount: number;
}

function App({errorsCount}: AppScreenProps): JSX.Element {
  return (
    <WelcomeScreenn errorsCount={errorsCount} />
  );
}

export default App;
