import React from 'react'
import { Navbar } from './components/index'
import { product as Product} from './components/index'


const App = () => {
  return (
    <div>
      <Navbar />
      <Product />
    </div>
  )
}

export default App