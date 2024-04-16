import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";



const MyProfile = () => {
    const {user} = useContext(AuthContext)
    // const { photoURL, displayName, email, uid } = user;
useEffect(() => {
  document.title = "My Profile || Dream Estate";
}, []);
    return (
      <>
        <div>
          <div className="flex flex-col md:flex-row bg-gray-100 rounded-lg gap-5 justify-around p-10">
            <div className=" m-auto">
              <img
                className="rounded-lg"
                src={user?.photoURL ? user.photoURL : ""}
                alt=""
              />
            </div>
            <div className="border-l-2 border-black flex flex-col items-center space-y-5 justify-center p-3 md:p-5">
              <h1 className="text-5xl  font-bold">
                {user?.displayName ? user.displayName : ""}
              </h1>
              <h6 className="text-2xl">
                Email: {user?.email ? user.email : "No Email Found"}
              </h6>
            </div>
          </div>
        </div>
      </>
    );
};

export default MyProfile;