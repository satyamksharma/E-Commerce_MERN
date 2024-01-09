import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import App from './App';
import HomeScreen from './screens/HomeScreen.jsx';
import ProductScreen from './screens/ProductScreen.jsx';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path='/'
            element={<App />}
        >
            <Route
                path='/'
                element={<HomeScreen />}
            />

            <Route
                path='/product/:id'
                element={<ProductScreen />}
            />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
