import { Product } from '@/common/Product'
import { link } from 'joi'
import { Link } from 'react-router-dom'

type Props = {
  products: Product[]
}

const Dashboard = ({ products }: Props) => {
  return (
    <div>
      <Link
        style={{ margin: '20px' }}
        className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        to='/admin/add'
      >
        Add new Product
      </Link>
      <div className='relative overflow-x-auto' style={{ margin: '20px' }}>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Title
              </th>
              <th scope='col' className='px-6 py-3'>
                Thumbnail
              </th>
              <th scope='col' className='px-6 py-3'>
                Description
              </th>
              <th scope='col' className='px-6 py-3'>
                Price
              </th>
              <th scope='col' className='px-6 py-3'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  <Link to={`/product/${item.id}`}>{item.title}</Link>
                </th>
                <td className='px-6 py-4'>
                  <img width={120} src={item.thumbnail} alt={item.title} />
                </td>
                <td className='px-6 py-4'>{item.description}</td>
                <td className='px-6 py-4'>{item.price}</td>
                <td className='px-6 py-4'>
                  <Link
                    to={`/admin/edit/${item.id}`}
                    className='text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-4 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900'
                  >
                    Update
                  </Link>

                  <Link
                    to={`/admin/delete/${item.id}`}
                    className='text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-4 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard
