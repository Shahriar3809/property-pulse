import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const EstateCard = ({ item }) => {
//   console.log(item);
  const {
    id,
    image_url,
    estate_title,
    area,
    location,
    price,
    segment_name,
    status,
    description,
    facilities,
  } = item;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-3 pt-10">
        <img src={image_url} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title font-bold">{estate_title}</h2>
        <p>{description.slice(0, 100)}....</p>
        <p className="font-semibold text-violet-800 text-right underline">
          {segment_name}
        </p>
        <div className="flex gap-5">
          <p className="bg-gray-200 font-bold p-1 rounded-lg  text-center">
            $ {price}
          </p>
          <p className="bg-orange-300 font-bold p-1 rounded-lg  text-center">
            {status}
          </p>
        </div>
        <div className="flex gap-3 font-bold p-2">
          <p className="text-green-500 pb-3">Area: {area}</p>
          <p className="text-orange-500 text-right">{location.city}</p>
        </div>
        <div>
          <p className="text-xl font-bold">Facilities: </p>
          {
            facilities ? facilities.map((item, index) => <span key={index}>{item}, </span>) : ''
          }
        </div>
        <div className="card-actions">
          <Link to={`/estate_details/${id}`} className="text-center bg-gray-700 w-full text-white p-3 rounded-lg">
            View Property
          </Link>
        </div>
      </div>
    </div>
  );
};

EstateCard.propTypes = {
  item: PropTypes.object,
};

export default EstateCard;
