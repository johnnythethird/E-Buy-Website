import { Link } from "react-router-dom"
import data from "../data"

const HomeScreen = () => {
  return (
    <div>
      <h1>Featured Products</h1>
          <div className="products">
            {data.products.map(products => (
              <div className="product" key={products.slug}>
                <Link to={`/product/${products.slug}`}>
                  <img src={products.image} alt={products.name} />
                </Link>
                <div className="product-info">
                  <Link to={`/product/${products.slug}`}>
                    <p>{products.name}</p>
                  </Link>
                  <p><strong>${products.price}</strong></p>
                  <button>Add to cart</button>
                </div>
              </div>
            ))}
          </div>
    </div>
  )
}

export default HomeScreen