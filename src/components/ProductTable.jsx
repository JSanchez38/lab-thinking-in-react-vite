import { useState } from "react"
import jsonData from './../data.json'
import ProductRow from "./ProductRow"


function ProductTable() {
  const [products, setProducts] = useState(jsonData)  


  return (
    <div>
      <table className="container table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
            {products.map((product) => (
              <ProductRow key={product.id} product={product}/>
            ))}

        </tbody>
      </table>
    </div>

  )
}

export default ProductTable