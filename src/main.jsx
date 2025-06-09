import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './features/TodoSlice.js'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)