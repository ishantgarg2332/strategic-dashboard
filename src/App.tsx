import { FunctionComponent, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Spin } from 'antd';
import PATHS from './routes';

const LoginContainer = lazy(
  () => import(/* webpackChunkName: "Login" */ './pages/Login/Login'),
);

const SignupContainer = lazy(
  () => import(/* webpackChunkName: "Signup" */ './pages/Sign-Up/Sign-Up'),
);

const App: FunctionComponent = () => {
  return (
    <Suspense fallback={<Spin size='large' />}> 
      <Routes>
        <Route element={<LoginContainer />}
          key={PATHS.LOGIN}
          path={PATHS.LOGIN || '404'}
        />
        <Route element={<SignupContainer />}
          key={PATHS.SIGN_UP}
          path={PATHS.SIGN_UP || '404'}
        />
      </Routes>
    </Suspense>
  );
};

export default App;
