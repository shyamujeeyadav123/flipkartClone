import { Outlet } from "react-router-dom";
import Navbar from "../components/common/navbar";
const PublicLayout = () => {
    return(
        <div className="bg-gray-800">
            <Navbar/>
            <main>
                <Outlet/>
            </main>
        </div>
        
    )
}
export default PublicLayout;