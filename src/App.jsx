import React,{useState} from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Class from './components/Class'
import Query from './components/Query'
import Users from './components/Users'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'


function App() {

  let [user,setUser] = useState([
    {
      id:1,
      name: "Priya",
      email: "priya@gmail.com",
      mobile: 8579244487,
      batch:"B53"
    },
    {
      id:2,
      name: "Dharshini",
      email: "dharsh@gmail.com",
      mobile: 9623124578,
      batch:"B54"
    },
    {
      id:3,
      name: "Mani",
      email: "mani@gmail.com",
      mobile: 8652145785,
      batch:"B55"
    },
    {
      id:4,
      name: "Rishi",
      email: "rishi@gmail.com",
      mobile: 9125489456,
      batch:"B55"
    }
  ])
  return <div id="wrapper">
    
    <BrowserRouter>
    <Sidebar/>
    <Routes>

      <Route path='/dashboard' element={<Dashboard user={user} setUser={setUser}/>}/>
      <Route path='/class' element={<Class />}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='/query' element={<Query/>}/>
      <Route path='/add-user' element={<AddUser user={user} setUser={setUser}/>}/>
      <Route path='/edit-user/:id' element={<EditUser user={user} setUser={setUser}/>}/> 
      <Route path='*' element={<Navigate to ='/dashboard'/>}/>

    </Routes>
    </BrowserRouter>
  
    
  </div>
}

export default App