import { useEffect,useState } from "react"
import { Link } from "react-router-dom"
import  Carousel from "../components/Carousel"
import { getProducts } from "../FetchData"
import './Home.css'

function Home() {
  const [productsData, setProductsData] = useState([])

  useEffect(()=>{
    getProducts().then((res)=>{
      console.log(res);
      setProductsData(res);
    })
  },[])

  return (
    <>
    <Carousel />
    <h2>OUR BEST SELLERS</h2>
    <div className="container">
      {productsData.map((el)=>{
        return(
          <div key={el.id} className=''>
           <Link to={`/${el.id}`}><div className="card" >
              <img src={el.image} alt="" className="images" />
              <div className="text_box">
                <h4>{el.name}</h4>
                <p>{el.description}</p>
                <button className="btn">Add to cart</button>
              </div>
            </div>
            </Link> 
          </div>
        )
      })}
    </div>
    </>
    
  )
}

export default Home