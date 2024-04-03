import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Notfound from './pages/Notfound'
import ProductDetail from './pages/ProductDetail'
import About from './pages/About'
import { useEffect, useState } from 'react'
import { Product } from './common/Product'
import instance from './apis'
import Dashboard from '@/pages/admin/Dashboard'
import AddProduct from './pages/admin/AddProduct'
import { createProduct, getProducts, uploadProduct } from './apis/product'
import EditProduct from './pages/admin/EditProduct'
import Delete from './pages/admin/Delete'

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const navigate = useNavigate()
  useEffect(() => {
    ;(async () => {
      const data = await getProducts()
      setProducts(data)
    })()
  }, [])
  const handleAdd = (product: Product) => {
    ;(async () => {
      const data = await createProduct(product)
      // setProducts((prev) => [...prev, data])
      setProducts([...products, data])
      navigate('/admin')
    })()
  }
  const handleUpload = (product: Product) => {
    ;(async () => {
      const data = await uploadProduct(product)
      // setProducts((prev) => [...prev, data])
      setProducts([...products, data])
      navigate('/admin')
    })()
  }
  return (
    <div className='container'>
      <Header />
      <main className='container main'>
        <Routes>
          <Route path='/'>
            <Route index element={<Home products={products} />}></Route>
            <Route path='/product/:id' element={<ProductDetail />}></Route>
            <Route path='/about' element={<About />}></Route>
          </Route>
          <Route path='/admin'>
            <Route index element={<Dashboard products={products} />}></Route>
            <Route path='/admin/add' element={<AddProduct onAdd={handleAdd} />}></Route>
            <Route path='/admin/edit/:id' element={<EditProduct onUpload={handleUpload} />}></Route>
            <Route path='/admin/delete/:id' element={<Delete />}></Route>
          </Route>
          <Route path='*' element={<Notfound />}></Route>
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
