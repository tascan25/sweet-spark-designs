import { createRoot } from 'react-dom/client'
import WholeAppContextProvider from './context/store.tsx';
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<WholeAppContextProvider>
    <App />
</WholeAppContextProvider>);
