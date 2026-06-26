import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate();
    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: ""
    });

    const handleInputChanges = (e) => {
        const { name, value } = e.target;
        setLoginFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleLoginFormData = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "http://localhost:3000/api/auth/login",
                loginFormData
            );

            console.log("login success ", res.data);

            localStorage.setItem("token", res.data.token);

            const role = res.data.role;
            console.log("role show krega ", role)

            localStorage.setItem(
                "user",
                JSON.stringify({ role: res.data.role })
            );

            if (role === "admin") {
                console.log("admin dashboard pe bhejo")
                navigate("/admin")
            }
            else if (role === "seller") {
                console.log("open seller dashboard")
                navigate("/seller")
            }
            else if (role === "customer") {
                console.log("open customer dashbaord")
                navigate("/customer")
            }

        } catch (error) {
            console.log("error", error.response?.data || error.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-700">

            <form
                onSubmit={handleLoginFormData}
                className="w-96 bg-white p-6 rounded-xl shadow-lg flex flex-col gap-4 "
            >

                <h2 className="text-2xl font-bold text-center text-gray-700">
                    Login
                </h2>

                <input
                    type="email"
                    name="email"
                    placeholder="Enter your registered email"
                    onChange={handleInputChanges}
                    className="border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    onChange={handleInputChanges}
                    className="border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                />

                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                >
                    Login
                </button>

            </form>
        </div>
    );
}

export default Login;