import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import appStore from '../src/utils/Store/appStore.js'
import {Provider} from 'react-redux'

createRoot(document.getElementById('root')).render(
    <Provider store={appStore}>
      <App />
    </Provider>
)
