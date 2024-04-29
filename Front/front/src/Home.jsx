import NavBar from "./Components/NavBar/navbar"
import Newsletter from "./Components/NewsLetter/Newsletter"
import Product from "./Components/Product/product"
import "./Home.css"
const Home = () => {
    const products = [
        { id: 1, name: "Product 1", image: "1.jpg", price: 10 },
        { id: 2, name: "Product 2", image: "2.jpg", price: 20 },
        { id: 3, name: "Product 3", image: "3.jpg", price: 30 },
        { id: 4, name: "Product 1", image: "1.jpg", price: 10 },
        { id: 5, name: "Product 2", image: "2.jpg", price: 20 },
        { id: 6, name: "Product 3", image: "3.jpg", price: 30 },
        { id: 7, name: "Product 1", image: "1.jpg", price: 10 },
        { id: 8, name: "Product 2", image: "2.jpg", price: 20 },
        { id: 9, name: "Product 3", image: "3.jpg", price: 30 },
        // Add more products as needed
      ];
  return (
    <div>
        <NavBar />
        <div className="product-layout">
      <h1 className="title">Unleash Your Gaming Power</h1>
      <div className="products">
        {products.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
        <Newsletter />
    </div>
  )
}

export default Home