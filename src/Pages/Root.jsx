import {Outlet} from 'react-router-dom'
import Navbar from '../Components/Navbar';
  import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

const Root = () => {
    return (
      <div className='max-w-[1170px] mx-auto p-5'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <ToastContainer />
      </div>
    );
};

export default Root;