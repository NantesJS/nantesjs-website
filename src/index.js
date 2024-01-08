import { createRoot } from 'react-dom/client'
import { App } from './components/App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App />)

registerServiceWorker()
