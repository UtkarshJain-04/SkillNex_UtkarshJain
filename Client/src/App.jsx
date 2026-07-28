import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup.jsx'
import Layout from './layout/Layout.jsx'
import Login from './pages/Login.jsx'
import ProjectFeed from './pages/ProjectFeed.jsx'
import EventFeed from './pages/EventFeed.jsx'
import ConnectionFeed from './pages/ConnectionFeed.jsx'
import CreateEvent from './pages/CreateEvent.jsx'

function App(){
  return (
 <Routes>

    <Route path='/' element={<Layout/>}>
      <Route index element={<Signup/> }/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/connection-feed' element={<ConnectionFeed/>}/>
      <Route path='/eventFeed' element={<EventFeed/>}/>
      <Route path='/create-event' element={<CreateEvent/>}/>
      <Route path='/project-Feed' element={<ProjectFeed/>}/>
      </Route>
 </Routes>
  )
}

export default App















