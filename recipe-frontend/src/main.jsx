import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import {ApiProvider} from './context/ApiContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { FavoriteProvider } from './context/FavoriteContext.jsx'
import { PostedRecipesProvider } from './context/PostedRecipesContext.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    
  <FavoriteProvider>
  <PostedRecipesProvider>
  <ApiProvider>
  <BrowserRouter>
  <App />
  </BrowserRouter>
 
  </ApiProvider>
  </PostedRecipesProvider>
  </FavoriteProvider>

  </AuthProvider>
)
