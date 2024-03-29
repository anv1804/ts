import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Notfound from './pages/Notfound'
import ProductDetail from './pages/ProductDetail'
import About from './pages/About'
import { useEffect, useState } from 'react'
import { Product } from './common/Product'
import instance from './apis'
import Dashboard from '@/pages/admin/Dashboard'
import AddProduct from './pages/admin/AddProduct'

function App() {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await instance.get(`/products/`)
        console.log(data)
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  }, [])
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/'>
          <Route index element={<Home products={products} />}></Route>
          <Route path='/product/:id' element={<ProductDetail />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Route>
        <Route path='/admin'>
          <Route index element={<Dashboard />}></Route>
          <Route path='/admin/add' element={<AddProduct />}></Route>
        </Route>
        <Route path='*' element={<Notfound />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
