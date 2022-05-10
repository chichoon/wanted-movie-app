import { Router } from './Router';
import { RecoilRoot } from 'recoil';

import './App.scss';
import './styles/index.scss';

const App = () => {
  return (
    <RecoilRoot>
      <div className='app'>
        <Router />
      </div>
    </RecoilRoot>
  );
};

export default App;
