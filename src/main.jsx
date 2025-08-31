import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { initialState, reducer } from './Reducer.jsx';
// import reducer, { initialState } from './Reducer.jsx';
import { StateProvider } from './StateProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </StrictMode>
);
