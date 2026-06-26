import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: ""

    })
    const handleInputData = (e) => {
        const { name, value } = e.target;
        setFormData((prev) =>
        ({
            ...prev,
            [name]: value
        }
        ))

    }
    const handleForm = async (e) => {
        e.preventDefault();
        console.log(formData)
        try {
            const res = await axios.post(
                "http://localhost:3000/api/auth/register",
                formData
            )
            console.log("success", res.data);
            navigate("/login")
        }
        catch (error) {
            console.log("error: ", error.response?.data || error.message)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-700">

            <form className="w-96 p-6 bg-white shadow-lg rounded-xl flex flex-col gap-4 " onSubmit={handleForm}>

                <h2 className="text-2xl font-bold text-center text-gray-700">
                    Register Form
                </h2>

                <input
                    type="text"
                    placeholder="Enter your name"
                    className="border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                    onChange={handleInputData}
                    name="name"
                />

                <input
                    type="email"
                    placeholder="Enter your email"
                    className="border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                    onChange={handleInputData}
                    name="email"


                />

                <select
                    name="role"
                    onChange={handleInputData}
                >
                    <option value="" disabled>
                        Select Role
                    </option>
                    <option value="customer">Customer</option>
                    <option value="seller">Seller</option>
                </select>
                <input
                    type="password"
                    placeholder="Enter your password"
                    className="border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                    onChange={handleInputData}
                    name="password"

                />

                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                >
                    Register
                </button>

            </form>
        </div>

    )
}
export default Register;