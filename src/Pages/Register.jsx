import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";

const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    const { email, password } = data;
   createUser(email, password)
   .then(result=> setUser(result.user))
   .catch(err => console.log(err))
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
              <input
                {...register("password", {
                  required: true,
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                    message: "Password must be in one uppercase, one lowercase letters and at least 6 character",
                  },
                })}
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
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
        </div>
      </div>
    </div>
  );
};

export default Register;
