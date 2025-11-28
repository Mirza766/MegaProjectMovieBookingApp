import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import SubscriptionContextProvider from './components/context/SubscriptionContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store} >
    <SubscriptionContextProvider>

    <App />
    </SubscriptionContextProvider>
   </Provider>
   </StrictMode>,
)
