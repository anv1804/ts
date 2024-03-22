import { product } from '../common/Product'

const ProductList = () => {
  const products: product[] = [
    {
      id: 1,
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
      images: [
        'https://cdn.dummyjson.com/product-images/1/1.jpg',
        'https://cdn.dummyjson.com/product-images/1/2.jpg',
        'https://cdn.dummyjson.com/product-images/1/3.jpg',
        'https://cdn.dummyjson.com/product-images/1/4.jpg',
        'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg'
      ]
    },
    {
      id: 2,
      title: 'iPhone X',
      description:
        'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://cdn.dummyjson.com/product-images/2/thumbnail.jpg',
      images: [
        'https://cdn.dummyjson.com/product-images/2/1.jpg',
        'https://cdn.dummyjson.com/product-images/2/2.jpg',
        'https://cdn.dummyjson.com/product-images/2/3.jpg',
        'https://cdn.dummyjson.com/product-images/2/thumbnail.jpg'
      ]
    }
  ]
  return (
    <div>
      <div className='container py-16'>
        <h2 className='text-2xl font-medium text-gray-800 uppercase mb-6'>shop by category</h2>
        <div className='grid grid-cols-3 gap-3'>
          <div className='relative rounded-sm overflow-hidden group'>
            <img src='assets/images/category/category-1.jpg' alt='category 1' className='w-full' />
            <a
              href='#'
              className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition'
            >
              Bedroom
            </a>
          </div>
          <div className='relative rounded-sm overflow-hidden group'>
            <img src='assets/images/category/category-2.jpg' alt='category 1' className='w-full' />
            <a
              href='#'
              className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition'
            >
              Mattrass
            </a>
          </div>
          <div className='relative rounded-sm overflow-hidden group'>
            <img src='assets/images/category/category-3.jpg' alt='category 1' className='w-full' />
            <a
              href='#'
              className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition'
            >
              Outdoor
            </a>
          </div>
          <div className='relative rounded-sm overflow-hidden group'>
            <img src='assets/images/category/category-4.jpg' alt='category 1' className='w-full' />
            <a
              href='#'
              className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition'
            >
              Sofa
            </a>
          </div>
          <div className='relative rounded-sm overflow-hidden group'>
            <img src='assets/images/category/category-5.jpg' alt='category 1' className='w-full' />
            <a
              href='#'
              className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition'
            >
              Living Room
            </a>
          </div>
          <div className='relative rounded-sm overflow-hidden group'>
            <img src='assets/images/category/category-6.jpg' alt='category 1' className='w-full' />
            <a
              href='#'
              className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition'
            >
              Kitchen
            </a>
          </div>
        </div>
      </div>
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.discountPercentage}</p>
          <p>{product.rating}</p>
          <p>{product.stock}</p>
          <p>{product.brand}</p>
          <p>{product.category}</p>
          <img src={product.thumbnail} alt={product.title} />
        </div>
      ))}
    </div>
  )
}

export default ProductList
