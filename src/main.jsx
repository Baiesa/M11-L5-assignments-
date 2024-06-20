import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App'; // Importing the main component of the application


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

/*
We have few diffrent installition before dive into 
1. npx create-vite FLASK-E-COMMERCE-UI-EXCERCISE  --template react
2. cd FLASK-E-COMMERCE-UI-EXCERCISE   
3. install npm   
4. npm install react-router-dom  
5. npm run dev
*/
