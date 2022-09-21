import { FunctionComponent, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Spin } from 'antd';
import PATHS from './routes';
import { Dashboard } from './components';

const LoginContainer = lazy(
  () => import(/* webpackChunkName: "Login" */ './pages/Login/Login'),
);

const SignupContainer = lazy(
  () => import(/* webpackChunkName: "Signup" */ './pages/Sign-Up/Sign-Up'),
);

const CampaignContainer = lazy(
  () => import(/* webpackChunkName: "Campaign" */ './pages/Campaigns/Campaigns')
)

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
        <Route element={<Dashboard />}
          path={PATHS.DASHBOARD}
        >
          <Route element={<CampaignContainer />}
            key={PATHS.CAMPAIGNS}
            path={PATHS.CAMPAIGNS || '404'}
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
