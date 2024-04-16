
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";


const EstateDetails = () => {

    const allData = useLoaderData();
    const {id} = useParams()

    useEffect(() => {
      document.title = `Details of ${id} || Dream Estate`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const currentData = allData.filter(data => data.id == id)
    const singleData = currentData[0];
    const {
    image_url,
    estate_title,
    area,
    facilities,
    location,
    price,
    segment_name,
    status,

    description} = singleData;
    // console.log(singleData)


    // Local storage set
      const handleAddToCart = (data) => {
        const getItem = JSON.parse(localStorage.getItem('carted')) || []
        const existData = getItem.find((item)=> item.id == data.id)
        if(!existData) {
          getItem.push(data)
          localStorage.setItem('carted', JSON.stringify(getItem))
          toast.success('Added to Cart List')
        } else {
          toast.error('Already Added');
        }
      }




    return (
      <div className="p-3">
        <div className="border p-4 md:p-10 bg-gray-100 shadow-2xl space-y-10">
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-violet-700 font-bold text-center">
            {estate_title}
          </h1>
          <div className="flex justify-between">
            <p className="text-center px-10 py-2 font-semibold text-2xl border bg-green-500 text-white">
              {segment_name}
            </p>
            <p className="text-center px-10 py-2  font-semibold text-2xl border bg-red-500 text-white">
              {status}
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-y-3 justify-between mt-5 font-semibold text-2xl">
            <p className="text-green-600 underline">
              <span className="text-violet-600">Total Area:</span> {area}
            </p>
            <p className="text-green-600 underline">
              <span className="text-violet-600">Location: </span>
              {location.address}, {location.city}, {location.state},{" "}
              {location.zipcode}
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">Facilities: </p>
            {facilities
              ? facilities.map((item, index) => (
                  <span className="text-xl text-violet-600" key={index}>
                    {item},{" "}
                  </span>
                ))
              : ""}
          </div>
          <div>
            <img className="rounded-lg w-full" src={image_url} alt="" />
          </div>
          <div>
            <p className="text-xl ">
              <span className="font-bold text-green-600">Details:</span>{" "}
              {description}
            </p>
          </div>
          <div className="flex gap-3 flex-col md:flex-row justify-between">
            <p className="text-2xl font-bold border md:w-3/12 text-center bg-violet-600 text-white p-3 rounded-xl">
              Price: $ {price}
            </p>
            <button
              onClick={() => {
                handleAddToCart(singleData);
              }}
              className="text-2xl font-bold border md:w-3/12 text-center bg-green-600 text-white p-3 rounded-xl"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
};

export default EstateDetails;