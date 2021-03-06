import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/home'
import Dashboard from './pages/dashboard'
import Contact from './pages/contact'
import About from './pages/about'
import Blog from './pages/blog'
import Breadcrumb from './Breadcrumb'

const items = [
  { to: '/', label: 'Home' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/contact', label: 'Contact' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
]

const App = () => (
  <div className='app'>
    <Breadcrumb>
      {items.map(({ to, label }) => (
        <Link key={to} to={to}>
          {label}
        </Link>
      ))}
    </Breadcrumb>
    <Router>
      <Home path='/' />
      <Dashboard path='/dashboard'/>
      <Contact path='/contact' />
      <About path='/about' />
      <Blog path='/blog' />
    </Router>
  </div>
)

export default App
