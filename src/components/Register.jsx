import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser } = useContext(AuthContext)

    const [showPass, setShowPass] = useState(false)

    const handleSignUp = e => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value



        console.log(email, password);
        createUser(email, password)
            .then((result) => {
                // Signed up 
                const user = result.user;
                const createdAt = result?.user?.metadata?.creationTime
                const newUser = { name, email, createdAt }

                console.log('registered in fb', user);
                form.reset()


                //save new user into db
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)


                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('user created to db', data);
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'User Created successfully!',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }

                    })

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorMessage);
            });


    }




    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col lg:flex-row shadow-lg rounded-lg bg-white max-w-4xl w-full">
                {/* Left Section */}
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-8 lg:w-1/2 flex flex-col justify-center items-center rounded-l-lg radius5xl">
                    <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
                    <p className="mb-6 text-center">
                        Enter your personal details to use all of the site's features.
                    </p>
                    <Link to='/login' className="bg-white text-purple-700 hover:bg-gray-200 px-6 py-2 rounded-xl font-medium transition">
                        SIGN IN
                    </Link>
                </div>

                {/* Right Section */}
                <div className="p-8 lg:w-1/2 flex flex-col justify-center items-center">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Create Account</h2>
                    <div className="flex gap-3 mb-6">
                        <button className="bg-gray-200 hover:bg-gray-300 rounded-xl px-5 h-10 flex  gap-3 items-center justify-center">
                            <FcGoogle /> Sign in With Google
                        </button>
                    </div>
                    <form onSubmit={handleSignUp} className='w-full'>
                        <input
                            name='name'
                            type="text"
                            placeholder="Name"
                            className="block w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                            required />
                        {/* <input
                            name='photo'
                            type="text"
                            placeholder="Photo URL"
                            className="block w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                            required /> */}
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
                        {/* {
                            errorMsg && <p className='text-red-600 text-center mb-1'>{errorMsg}</p>
                        } */}
                        <div className='flex justify-center items-center'>

                            <button className="bg-purple-600  text-white hover:bg-purple-700 px-6 py-2 rounded-lg font-medium transition">
                                SIGN UP
                            </button>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default Register;