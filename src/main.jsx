import React from 'react';
import ReactDOM from 'react-dom/client';
import AnswerContextProvider from './contexts/AnswerContext.jsx';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnswerContextProvider>
      <App />
    </AnswerContextProvider>
  </React.StrictMode>
);
