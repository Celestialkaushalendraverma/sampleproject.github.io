import './App.css'
import NavBar from './components/NavBar.js'
import Home from './components/Home.js'
import About from './components/About.js'
import Categories from './components/Categories.js'
import Blog from './components/Blog.js'
import Contact from './components/Contact.js'
import Lazyloading from './components/Lazyloading.js'
import Contextapi from './components/Contextapi.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/lazyloading' element={<Lazyloading />} />
          <Route path='/contextapi' element={<Contextapi />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
