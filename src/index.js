import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

/**
 * initialise our dom to be used by react using the id root from initial div
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
        <App />
    </BrowserRouter>
    
);
