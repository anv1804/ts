import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Banner from './components/Banner'
import ProductList from './components/ProductList'

function App() {
  return (
    <div className='container'>
      <Header />
      <Nav />
      <Banner />
      <ProductList />
    </div>
  )
}

export default App
