import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const UpdateProfile = () => {

     const { user } = useContext(AuthContext);

    const handleSubmit = (event) => {
        
        const name = event.target.name.value
        const photo = event.target.photo.value
        console.log(name, photo)
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then((res) => {
            console.log(res, "Successfully Update");
          })
          .catch((err) => {
            console.log(err);
          });
    }
    return (
      <div className="md:w-1/2 m-auto">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              required
              placeholder="Photo URL"
              className="input input-bordered"
            />
          </div>
                
          <div className="form-control mt-6">
            <button className="btn font-bold text-xl btn-primary">Update Changes</button>
          </div>
        </form>
      </div>
    );
};

export default UpdateProfile;