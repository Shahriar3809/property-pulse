import PropTypes from "prop-types";

const LocalCard = ({ singleData }) => {
 const {
   image_url,
   estate_title,
   area,
   price,
   segment_name,
   status,

   description,
 } = singleData;
  return (
    <div>
      <div>
        <div className="card h-[550px] md:h-[550px] lg:h-[600px] bg-base-100 shadow-xl">
          <figure>
            <img src={image_url} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{estate_title}</h2>
            <p>{description.slice(0, 200)}...</p>
            <div className="card-actions justify-end">
              <p>Price ${price}</p>
              <p>Area: {area}</p>
            </div>
            <div className="flex justify-between gap-5">
              <p className="text-red-600 p-1 underline bg-gray-300 w-24 text-center rounded-md font-semibold">
                {status}
              </p>
              <p className="border p-1 text-center bg-base-200">{segment_name}</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

LocalCard.propTypes = {
  singleData: PropTypes.object,
};

export default LocalCard;
