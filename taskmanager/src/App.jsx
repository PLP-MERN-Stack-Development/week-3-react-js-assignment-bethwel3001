import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Tasks from './pages/Tasks'
import ApiDemo from './pages/ApiDemo'

const App = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/api-demo" element={<ApiDemo />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

export default App