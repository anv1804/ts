import { Link } from 'react-router-dom'
import { Product } from '@/common/Product'

type Props = {
  products: Product[]
}

const Home = ({ products }: Props) => {
  return (
    <div>
      <div className='bg-white'>
        <div className='font-[sans-serif] bg-gray-100'>
          <div className='p-4 mx-auto lg:max-w-7xl sm:max-w-full'>
            <h2 className='text-4xl font-extrabold text-gray-800 mb-12'>Premium Sneakers</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
              {products.map((product) => (
                <Link to={`/product/${product.id}`}>
                  <div className='bg-white rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative'>
                    <div className='bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4'></div>
                    <div className='w-11/12 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4'>
                      <img src={product.thumbnail} alt='Product 1' className='h-full w-full object-contain' />
                    </div>
                    <div>
                      <h3 className='text-lg font-bold text-gray-800'>{product.title}</h3>
                      <p className='text-gray-500 text-sm mt-2'>{product.description}</p>
                      <h4 className='text-lg text-gray-700 font-bold mt-4'>${product.price}</h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
