import { Outlet } from "react-router-dom"
import SideBar from "../pages/admin/sidebar"

const AdminLayout = () => {
    return (
            <div className="bg-gray-500 flex  gap-10 ">

                <SideBar />
                <main>
                    <Outlet />
                </main>
            </div>
    )
}
export default AdminLayout;