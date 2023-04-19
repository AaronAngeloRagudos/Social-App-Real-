import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './styles/index.css';
import { Loader } from './pages';
import { OnAuthStateChangeFirebaseProvider } from './firebase';

const AppRouter = lazy(() => import('./routes/AppRouter'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <OnAuthStateChangeFirebaseProvider>
          <Suspense fallback={ <Loader /> }>
            <AppRouter />
          </Suspense>
        </OnAuthStateChangeFirebaseProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
