import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './custom.scss';
import { Provider } from "react-redux";
import {  store } from "./store/store";
import { SnackbarProvider } from "notistack";
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <SnackbarProvider autoHideDuration={2000}>
    <Provider store={store}>
        <App />
    </Provider>
    <Toaster />
  </SnackbarProvider>
  
)
