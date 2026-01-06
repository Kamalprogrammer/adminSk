import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Default from './pages/Default'
import Analytics from './pages/Analytics'
import Notification from './components/Notification'
import Finance from "./pages/Finance"
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/default" replace />} />
        <Route path="/default" element={<Default />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/finance" element={<Finance />} />
        {/* <Route path="*" element={<Navigate to="/default" replace />} /> */}
      </Routes>

      {/* <Notification/> */}
    </Layout>
  )
}

export default App
