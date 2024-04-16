import { useParams } from "react-router-dom";


const EstateDetails = () => {
    const {id} = useParams()
    return (
        <div>
            Details
        </div>
    );
};

export default EstateDetails;