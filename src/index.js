// IMPORT THE REACT LIBRARY FOR BUILDING USER INTERFACES
import React from 'react';

// IMPORT THE ReactDOM PACKAGE, SPECIFICALLY THE createRoot METHOD FOR RENDERING REACT ELEMENTS INTO THE DOM IN REACT 18+
import ReactDOM from 'react-dom/client';

// IMPORT THE MAIN APP COMPONENT FROM THE 'App' FILE LOCATED IN THE 'Components/App' DIRECTORY
import App from './Components/App/App';

// IMPORT STYLESHEET FOR THE ENTIRE APPLICATION FROM 'index.css' LOCATED IN THE SAME DIRECTORY AS THIS FILE
import './index.css';

// CREATE A ROOT CONTAINER WHERE THE REACT APPLICATION WILL BE MOUNTED, USING THE ELEMENT WITH ID 'root' FROM THE HTML DOCUMENT
const root = ReactDOM.createRoot(document.getElementById('root'));

// RENDER THE APP COMPONENT INSIDE THE ROOT CONTAINER IN STRICT MODE. STRICT MODE IS A TOOL FOR HIGHLIGHTING POTENTIAL PROBLEMS IN AN APPLICATION. IT ACTIVATES ADDITIONAL CHECKS AND WARNINGS FOR ITS DESCENDANTS
root.render(
  <React.StrictMode>
    <App /> {/* THE MAIN APP COMPONENT THAT ACTS AS THE ENTRY POINT FOR THE APPLICATION */}
  </React.StrictMode>
);