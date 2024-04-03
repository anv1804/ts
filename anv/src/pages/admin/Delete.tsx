import { Product } from '@/common/Product'
import { SubmitHandler, useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useParams } from 'react-router-dom'
import { getProduct } from '@/apis/product'

type Props = {}
const schemaProduct = Joi.object({
  title: Joi.string().required().min(3).max(255),
  price: Joi.number().required().min(0),
  description: Joi.string().allow('')
})
const Delete = (props: Props) => {
  const {
    unregister,
    handleSubmit,
    formState: { errors }
  } = useForm<Product>({
    resolver: joiResolver(schemaProduct)
  })
  const confirmDelete = () => {
    // getProduct(id)
    const { id } = useParams()

    {
      unregister('id')
    }
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Do you want to delete </h2>
      <button className='text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-4 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900'>
        Cancel
      </button>
      <button
        className='text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-4 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
        onClick={confirmDelete}
      >
        Confirm
      </button>
    </div>
  )
}

export default Delete
