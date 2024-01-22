import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { gitHubInfoLoader } from './components/Github/Github.jsx'
import Error from './components/Error/Error.jsx'
// const router= createBrowserRouter(
//   [
//     {
//       path:'/',
//       element: <App/>,
//       children:[
//         {
//           path:'',
//           element: <Home/>
//         },
//         {
//           path:'about',
//           element: <About/>
//         },
//         {
//           path:'contact',
//           element: <Contact/>
//         }
//       ]
//     }
//   ]
// )

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/user/:id' element={<User/>}/>
      <Route 
      loader={gitHubInfoLoader}
      path='/github'
      element={<Github/>}/>
      <Route path='*' element={<Error/>}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
