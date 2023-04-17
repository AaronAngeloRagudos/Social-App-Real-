import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { OnAuthStateChangeFirebase } from './firebase';
import './styles/index.css';
import { Loader } from './pages';

const AppRouter = lazy(() => import('./routes/AppRouter'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <OnAuthStateChangeFirebase>
          <Suspense fallback={ <Loader /> }>
            <AppRouter />
          </Suspense>
        </OnAuthStateChangeFirebase>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
