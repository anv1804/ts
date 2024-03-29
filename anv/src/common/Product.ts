export type Product = {
  map(arg0: (product: any) => import('react/jsx-runtime').JSX.Element): import('react').ReactNode
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}
