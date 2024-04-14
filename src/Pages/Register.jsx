import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const [show, setShow] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    const { email, name, photo, password } = data;
    console.log(data)

   createUser(email, password)
   .then(result=> {
    setUser(result.user);
    toast.success("Account Created successfully.");
    navigate('/')

    // Update Profile while registration
      updateProfile(result.user, {
        displayName: name,
        photoURL: photo,
      })
      .then(res=> {
        console.log(res, "Successfully Update")
      })
      .catch(err=> {
        console.log(err)
      })

   })
   .catch(() => {
    toast.error('Email already Exist')
   })
  };

  return (
    <div className="hero">
      <div className="hero-content flex flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6"></p>
        </div>
        <div className="card shrink-0 w-full md:w-[400px] shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true })} // changed from {...register("example")}
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                {...register("photo")}
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <div className="relative">
                <input
                  {...register("password", {
                    required: true,
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                      message:
                        "Password must be in one uppercase, one lowercase letters and at least 6 character",
                    },
                  })}
                  type={show ? "password" : "text"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered w-full"
                />
                <div
                  onClick={() => {
                    setShow(!show);
                  }}
                  className="absolute right-3 top-4 text-xl"
                >
                  {show ? <FaRegEye /> : <FaRegEyeSlash />}
                </div>
              </div>
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div>
            <p className="text-center pb-8 text-xl">
              Already have an account? Please{" "}
              <Link className="font-bold text-blue-500 underline" to={`/login`}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
