import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { fetchUsers } from './features/users/usersSlice.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { fetchPosts } from './features/posts/postsSlice.jsx'

store.dispatch(fetchUsers())
store.dispatch(fetchPosts())

const basePath = import.meta.env.VITE_BASE_PATH;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Router basename={basePath}>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>,
)
