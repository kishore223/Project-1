import Routers from './Routers/Routers'
import { Navbar, Sidebar } from './layout'
function App() {

  return (
    <div style={{textAlign:'center', width:'100vw'}}>
      <Navbar />
      <Sidebar />
      <Routers />
    </div>
  )
}

export default App
