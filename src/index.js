import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './modules/core';

import('bootstrap/dist/css/bootstrap.min.css');
import('./style/index.css');

// import("bootstrap/dist/css/bootstrap.css");
// import("font-awesome/css/font-awesome.css");
// import("bootstrap-icons/font/bootstrap-icons.css");
// // import("bootstrap/dist/css/bootstrap.min.css");
// // import("bootstrap/js/src/dropdown");
// // import("@fortawesome/fontawesome-free/css/all.css");
// import("./style/style.css");
// import("react-toastify/dist/ReactToastify.css");
// import("./style/customer.style.scss");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);