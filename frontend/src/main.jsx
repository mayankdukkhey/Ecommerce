import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import './index.css';
import App from './routes/App.jsx';
import Bag from './routes/Bag.jsx';
import myntraStore from './store/index.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    },
  {
    path:'/bag',
    element:<>
      <Header></Header>
      <Bag></Bag>
      <Footer></Footer>
    </>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
