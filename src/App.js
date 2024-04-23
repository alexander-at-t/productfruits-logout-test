import { useState } from 'react';
import ProductFruitsIntegration from './ProductFruitsIntegration';

function App() {
  const [userInfo, setUserInfo] = useState(null);

  const handleLogin = () => {
    setUserInfo({
      username: 'mAJBOf56oFURYwEpIvOae9ZJntQ2',
      signUpAt: '2024-04-23T09:48:42.337Z',
      role: 'owner',
      props: {
        isActivationStepPassed: true,
        env: 'development',
        pfConfig: {
          isProductFruitsActive: true,
        },
      },
    });
    window.history.pushState({}, '', '/dashboard/home');
  };

  const handleLogout = () => {
    setUserInfo(null);
    window.history.pushState({}, '', '/login');
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <ProductFruitsIntegration userInfo={userInfo} />
    </div>
  );
}

export default App;
