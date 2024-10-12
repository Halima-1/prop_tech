// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
// import './App.css'
import Header from './component/layout/header';
import Footer from './component/layout/footer';
import Home from './component/home/landing'
import Login from './component/form/login';
import Register from './component/form/register';
import Landlord from './component/home/landlord';
function App() {
  // const [count, setCount] = useState(0)
  function Layout() {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };
  return (
      <BrowserRouter basename='prop_tech'>
      <Routes>
        <Route path='/' element={<Layout />}> 
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/> 
        </Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App
