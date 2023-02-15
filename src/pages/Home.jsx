import { useEffect,useState } from "react"
import { getProducts } from "../FetchData"

function Home() {
  const [productsData, setProductsData] = useState([])

  useEffect(()=>{
    getProducts().then((res)=>{
      console.log(res);
      setProductsData(res);
    })
  },[])

  return (
    <div>
      {productsData.map((el)=>{
        return(
          <div key={el.id}>
            <div className="card">
              <img src={el.image} alt="" className="images" />
              <div className="text_box">
                <h4>{el.name}</h4>
                <p>{el.description}</p>
                <button>Add</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Home