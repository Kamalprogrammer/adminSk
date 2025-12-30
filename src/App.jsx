import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Default from './pages/Default'
import Analytics from './pages/Analytics'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard/default" replace />} />
        <Route path="/dashboard/default" element={<Default />} />
        <Route path="/dashboard/analytics" element={<Analytics />} />
        <Route path="/dashboard/finance" element={<Default />} />
        <Route path="*" element={<Navigate to="/dashboard/default" replace />} />
      </Routes>
    </Layout>
  )
}

export default App
