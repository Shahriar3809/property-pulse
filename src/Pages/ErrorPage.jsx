import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
      <div className="flex flex-col justify-center gap-5 items-center h-[100vh]">
        <p className="text-9xl">404</p>
        <h1 className="text-7xl text-red-500 font-bold">Error</h1>
        <p className="text-xl ">Page Not Found</p>
        <button className="btn btn-warning">
          <Link to="/">Go to Home</Link>
        </button>
      </div>
    );
};

export default ErrorPage;