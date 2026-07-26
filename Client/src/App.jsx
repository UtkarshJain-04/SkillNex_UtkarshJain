import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup.jsx'
import Layout from './layout/Layout.jsx'
import Login from './pages/Login.jsx'

// import EventFeed from './pages/EventFeed.jsx'

function App(){
  return (
 <Routes>

    <Route path='/' element={<Layout/>}>
      <Route path='/signup' element={<Signup/> }/>
      <Route path='/login' element={<Login/>}/>
   
      {/* <Route path='/eventFeed' element={<EventFeed/>}/> */}
      </Route>
 </Routes>
  )
}

export default App















