import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import App from './pages/App';
import { Home } from './pages/Home';

import { 
  BrowserRouter, 
  Rout
  Routes, 
  Link 
} from 'react-router-dom';
// Routes faz papel do switch

import { Home } from './pages/Home'

const Home = () => {
  // fragmento
  return <> 
    {/* <span>Home Page</span> */}
    <Link to="/app">Go app</Link>
  </>
} 

const root = createRoot(document.getElementById('root'))

root.render(
  <Roots>
    <Routes>

      <Route path="/" element={<Home />}/>
  
      <Route path="/app" element={<App />}/>

    </Routes>
  </BRoots>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
