import { Product } from '@/common/Product'
import { SubmitHandler, useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useParams } from 'react-router-dom'
import { getProduct } from '@/apis/product'

type Props = {
  onUpload: (products: Product) => void
}
const schemaProduct = Joi.object({
  title: Joi.string().required().min(3).max(255),
  price: Joi.number().required().min(0),
  description: Joi.string().allow('')
})

const EditProduct = ({ onUpload }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Product>({
    resolver: joiResolver(schemaProduct)
  })
  const onSubmit: SubmitHandler<Product> = (data) => {
    // console.log(data)
    onUpload(data)
  }
  return (
    <div>
      <form className='max-w-sm mx-auto' onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-5'>
          <label htmlFor='title' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Title
          </label>
          <input
            type='text'
            id='title'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Title'
            {...register('title', { required: true })}
          />
          {errors.title && <span className='text-red-600'>{errors.title.message}</span>}
        </div>
        <div className='mb-5'>
          <label htmlFor='price' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Price
          </label>
          <input
            type='number'
            id='price'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            {...register('price', { required: true })}
          />
          {errors.price && <span className='text-red-600'>{errors.price.message}</span>}
        </div>
        <div className='mb-5'>
          <label htmlFor='description' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Description
          </label>
          <input
            type='text'
            id='description'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            {...register('description')}
          />
          {errors.description && <span className='text-red-600'>{errors.description.message}</span>}
        </div>
        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default EditProduct
