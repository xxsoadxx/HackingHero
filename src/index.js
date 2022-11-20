import React from 'react';
import { Routes, Route, HashRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Rank from './views/Rank';

function RoutesApp() {
    return (
      <HashRouter>
        <Routes>
          <Route path="/">
            <Route index element={<App />} />
            <Route path="rank" element={<Rank />} />
            <Route path="*" element={<App />} />
          </Route>
        </Routes>
      </HashRouter>
    );
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RoutesApp />);
