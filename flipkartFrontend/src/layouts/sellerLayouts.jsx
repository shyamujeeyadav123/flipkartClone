import { Outlet } from "react-router-dom";
import SellerSideBar from "../pages/seller/sidebar";

const SellerLayout = () => {
    return(
        <div className= " flex  gap-20 ">
            <div className="bg-gray-400">
            <SellerSideBar/>

            </div>

            <main className = "bg-red-400">
                <Outlet/>
            </main>
        </div>
    )
}
export default SellerLayout;