import { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom"
import axios from 'axios'

// state is the current state and action is the type we're inputing
const reducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_REQUEST': // fetch the data
      return {...state, loading: true} // loading true so we can set a loading box in UI
    case 'FETCH_SUCCESS':
      return {...state, products: action.payload, loading: false}
    case 'FETCH_FAIL':
      return {...state, loading: false, error: action.payload}
    default:
      return state
  }
}

const HomeScreen = () => {
  /* We need to get the data from backend, so axios will help us grab the data 
  and useEffect will immediately display the data from backend. We will also use dispatch
  to update the current state.*/
  const [{loading, error, products}, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  })

  //const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({type: 'FETCH_REQUEST'})
      try {
        const result = await axios.get('/api/products')
        dispatch({type: 'FETCH_SUCCESS', payload: result.data})
      } catch(err) {
        dispatch({type: 'FETCH_FAIL', payload: err.message})
      }

      // setProducts(result.data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Featured Products</h1>
          <div className="products">
            {loading? (
              <div>Laoding...</div>
            ) : error ? (
              <div>{error}</div>
            ) : (
            products.map(products => (
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
            ))
            )}
          </div>
    </div>
  )
}

export default HomeScreen