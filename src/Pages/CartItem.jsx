import { useEffect, useState } from "react";
import LocalCard from "../Components/LocalCard";


const CartItem = () => {
    const [item, setItem] = useState([])
useEffect(() => {
  document.title = "Cart || Dream Estate";
}, []);
    useEffect(()=> {
        const getItem = JSON.parse(localStorage.getItem("carted"));
        setItem(getItem);
    },[])
    // console.log(item)
    return (
      <div className="grid p-5 gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
            item && item.map((singleData, index)=> <LocalCard key={index} singleData={singleData}></LocalCard>)
        }
      </div>
    );
};

export default CartItem;