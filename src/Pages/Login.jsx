import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {

    const { loginUser, setUser, googleLogin, githubLogin } =
      useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        loginUser(email, password)
        .then(result=> {
            setUser(result.user)
            event.target.reset()
            toast.success("Successfully logged in");
        })
        .catch(error => {
            console.log(error.message)
            toast.error('Email or password not matched')
        })
    }



    const handleGoogleLogin = () => {
        googleLogin()
        .then(result=> {
            setUser(result.user)
            toast.success("Successfully logged in");
        })
        .catch(error=> {
            console.log(error.message)
            toast.error("Something went wrong")
        })

    }



    const handleGithubLogin = () => {
      githubLogin()
        .then((result) => {
          setUser(result.user);
          toast.success('Successfully logged in')
        })
        .catch((error) => {
          console.log(error.message);
          toast.error("Something went wrong");
        });
    }


    return (
      <div className="hero">
        <div className="hero-content flex flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6"></p>
          </div>
          <div className="card shrink-0 w-full min-w-[350px] md:w-[400px] shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>

            <div className="flex flex-col md:flex-row mx-8 gap-3 md:mx-0 md:gap-0 justify-around mb-5">
              <button
                onClick={handleGoogleLogin}
                className="btn btn-success text-white font-bold"
              >
                <FaGoogle className="text-xl" />
                Google Login
              </button>
              <button
                onClick={handleGithubLogin}
                className="btn bg-violet-500 text-white font-bold"
              >
                <FaGithub className="text-xl" />
                Github Login
              </button>
            </div>

            <div>
              <p className="text-center pb-8 text-xl">
                New User? Please{" "}
                <Link
                  className="font-bold text-blue-500 underline"
                  to={`/register`}
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;