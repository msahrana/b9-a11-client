import {Outlet} from "react-router-dom";
// import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="container max-w-screen-2xl mx-auto">
        {/* <Navbar></Navbar> */}
        <div>
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
