import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../FetchData";
import './Product.css'

function Product() {

    const [productData, setProductData] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
      getProducts().then((res)=>{
        console.log(res,'pr');
        setProductData(res[id-1]);
        console.log(productData)
      })
    },[id,productData])

  return (
    <div>
        {
            productData ? (
                <div className="product_box">
                    <img src={productData.image} className='image' />
                    <div className="text_box">
                      <h4>{productData.name}</h4>
                      <p>{productData.description}</p>
                      <p>{productData.price}</p>
                    </div>
                </div>
            ):
            <div></div>
        }
    </div>
  )
}

export default Product