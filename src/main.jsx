import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRouter } from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { OnAuthStateChangeFirebase } from './firebase';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <OnAuthStateChangeFirebase>
          <AppRouter />
        </OnAuthStateChangeFirebase>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
