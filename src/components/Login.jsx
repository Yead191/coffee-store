import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {

    const {loginUser} = useContext(AuthContext)
    const [showPass, setShowPass] = useState(false)

    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target 
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password);
        loginUser(email, password)
        .then(res=> {
            console.log(res.user);
            toast.success('User login Successfully!');
            const loggedAt = res?.user?.metadata?.lastSignInTime
            const loginInfo = {
                email, loggedAt
            }
            fetch('http://localhost:5000/users/', {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(loginInfo)

            })
            .then(res=> res.json())
            .then(data => {
                console.log('sign in info updated in db', data) 
            })


        })
        .catch(error=>{
            console.log(error.message);
        })
    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col lg:flex-row shadow-lg rounded-lg bg-white max-w-4xl w-full">
                {/* Left Section */}
                <div className="p-8 lg:w-1/2 flex flex-col justify-center items-center">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Sign In</h2>
                    <div className="flex gap-3 mb-6">
                        <button  className="bg-gray-200 hover:bg-gray-300 rounded-xl px-5 h-10 flex  gap-3 items-center justify-center">
                            <FcGoogle /> Sign in With Google
                        </button>

                    </div>
                    <form onSubmit={handleLogin} className='w-full'>
                        <input
                            
                            name='email'
                            type="email"
                            placeholder="Email"
                            className="block w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                            required />
                        <div className="relative w-full mb-4">
                            <input
                                type={showPass ? 'text' : 'password'}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                                placeholder="Password"
                                name="password"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPass(!showPass)}
                                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                            >
                                {showPass ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>


                        <Link to='/forgetPass'  href="#" className="text-sm text-purple-600 hover:underline mb-4 block">
                            Forgot Your Password?
                        </Link>

                        <div className='flex items-center justify-center'>

                            <button className="bg-purple-600 text-white hover:bg-purple-700 px-6 py-2 rounded-xl font-medium transition hover:scale-110">
                                SIGN IN
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right Section */}
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-8 lg:w-1/2 flex flex-col justify-center items-center rounded-r-lg roundedLogin">
                    <h2 className="text-3xl font-bold mb-4">Hello, Friend!</h2>
                    <p className="mb-6 text-center">
                        Register with your personal details to use all of the site's features.
                    </p>
                    <Link to='/register' className="bg-white text-purple-700 hover:bg-gray-200 px-6 py-2 rounded-xl font-medium transition hover:scale-110">
                        SIGN UP
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;