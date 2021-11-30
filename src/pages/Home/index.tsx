import React, { useState, useEffect } from 'react'
import { MdAddShoppingCart } from 'react-icons/md'

import { ProductList } from './styles'
// import { api } from '../../services/api'
// import { formatPrice } from '../../utils/format'
// import { useCart } from '../../hooks/useCart'

interface Product {
  id: number
  title: string
  price: number
  image: string
}

interface ProductFormatted extends Product {
  priceFormatted: string
}

interface CartItemsAmount {
  [key: number]: number
}

const Home = () => {
  // const [products, setProducts] = useState<ProductFormatted[]>([]);
  // const { addProduct, cart } = useCart();

  // const cartItemsAmount = cart.reduce((sumAmount, product) => {
  //   // TODO
  // }, {} as CartItemsAmount)

  useEffect(() => {
    async function loadProducts() {
      // TODO
    }

    loadProducts()
  }, [])

  function handleAddProduct(id: number) {
    // TODO
  }

  return (
    <ProductList>
      <li>
        <img
          src='https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
          alt='Camisa Xadrez'
        />
        <strong>Camisa Xadrez</strong>
        <span>R$ 159,90</span>
        <button
          type='button'
          data-testid='add-product-button'
          // onClick={() => handleAddProduct(product.id)}
        >
          <div data-testid='cart-product-quantity'>
            <MdAddShoppingCart size={16} color='#FFF' />
            {/* {cartItemsAmount[product.id] || 0} */} 2
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  )
}

export default Home