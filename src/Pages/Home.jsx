import { useLoaderData } from "react-router-dom";
import Sliders from "../Components/Sliders";
import EstateCard from "../Components/EstateCard";
import Contact from "./Contact";
import { useEffect } from "react";


const Home = () => {
    const estateData = useLoaderData();
    useEffect(()=> {
      document.title = "Home || Dream Estate"
    },[])
    return (
      <div>
        <div className="p-5">
          <Sliders></Sliders>
        </div>
        <div className="mt-20">
          <h1 className="text-4xl underline text-orange-500 font-bold text-center">Estates</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
          {estateData ? estateData.map((item) => (
            <EstateCard key={item.id} item={item}></EstateCard>
          )): ''}
        </div>
        <div className="p-5">
          <h2 className="text-3xl md:text-5xl underline font-bold text-center pt-20 my-10">Contact Us</h2>
          <Contact></Contact>
        </div>
      </div>
    );
};

export default Home;