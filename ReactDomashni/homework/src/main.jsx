import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx';
import { Menu } from './components/Menu.jsx';
import { Footer } from './components/Footer.jsx';
import { Button } from './components/Button.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Button />
    <Menu />
    <Button />
    <Footer />
    <Button />
  </StrictMode>
)
