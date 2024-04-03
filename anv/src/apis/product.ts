import instance from '.'
import { Product } from '../common/Product'

export const getProducts = async () => {
  try {
    const { data } = await instance.get(`/products`)
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}
export const getProduct = async (id: string | number) => {
  try {
    const { data } = await instance.get(`/products/${id}`)
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}
export const createProduct = async (product: Product) => {
  try {
    const { data } = await instance.post(`/products/`, product)
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}
export const uploadProduct = async (product: Product) => {
  try {
    const { data } = await instance.put(`/products/`, product)
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}
