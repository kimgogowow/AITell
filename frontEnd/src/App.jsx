import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <Outlet />
    </div>
  )
}

export default App
