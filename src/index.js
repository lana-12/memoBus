import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Login from './components/Login';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './scss/imports.scss';
import { actionUser } from './actions/user';
import Home from './components/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
const router = createBrowserRouter(
  createRoutesFromElements(
    <>


      <Route path="/" element={<App />} >
        <Route path="/" element={<Login />} action="{actionUser}" />
        <Route path="/home" element={<Home/>}  />
        {/* <Route path="articles" element={<Articles />} loader={loaderArticles} > */}

        {/* </Route>
        <Route path="articles/:id" element={<ArticleDetail />} loader={loaderArticle} />

      </Route> */}
        {/* <Route path="/add/article" action={actionAdd} /> */}

      </Route>

    </>
  )
)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
