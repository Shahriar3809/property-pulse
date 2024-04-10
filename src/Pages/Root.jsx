import {Outlet} from 'react-router-dom'
import Navbar from '../Components/Navbar';
  import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import Footer from '../Components/Footer';

const Root = () => {
    return (
      <>
        <div className="max-w-[1170px] mt-5 mx-auto p-5 md:p-0">
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
        <ToastContainer />
      </>
    );
};

export default Root;