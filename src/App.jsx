import { useState } from 'react'
import './App.css'
import Layout from './components/layout/Layout'
import Default from './pages/Default'

function App() {
  const [currentPage, setCurrentPage] = useState('default');

  const renderPage = () => {
    switch (currentPage) {
      case 'default':
        return <Default />;
      default:
        return <Default />;
    }
  };

  return (
    <Layout onNavigate={setCurrentPage}>
      {renderPage()}
    </Layout>
  )
}

export default App
