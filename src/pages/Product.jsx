import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../FetchData";

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
                <div>
                    <img src={productData.image} />
                </div>
            ):
            <div></div>
        }
    </div>
  )
}

export default Product