import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffeeDetails = useLoaderData()
    // console.log(coffeeDetails);

    const {_id,  name, price, supplier, taste, category, details, photo } = coffeeDetails
    const navigate = useNavigate()


    const handleUpdateCoffee = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const price = form.price.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value

        const updatedCoffee = { name, price, supplier, taste, category, details, photo }
        console.log(updatedCoffee);
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated successfully!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset()
                    navigate('/')

                }
            })

    }
    return (
        <div className="bg-white min-h-screen flex justify-center items-center ">
            <div className=" bg-[#F4F3F0] shadow-md rounded-lg p-20 w-3/4">
                <Link to={'/'} className="text-blue-500 font-semibold mt-4">
                    &larr; Back to home
                </Link>
                <h2 className="text-3xl font-bold text-center mb-4 mt-6 font-rancho">Update <span className='text-red-500 text-4xl'>{name}</span> Details</h2>
                <p className="text-center text-gray-600 mb-8">
                It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                </p>
                <form onSubmit={handleUpdateCoffee} className="grid grid-cols-2 gap-6 ">
                    {/* Name */}
                    <div>
                        <label className="block font-semibold mb-2">Coffee Name</label>
                        <input
                            defaultValue={name}
                            type="text"
                            placeholder="Enter coffee name"
                            className="input input-bordered w-full"
                            name='name'

                            required />
                    </div>
                    {/* Price */}
                    <div>
                        <label className="block font-semibold mb-2">Price</label>
                        <input
                            defaultValue={price}
                            type="text"
                            placeholder="Enter coffee Price"
                            className="input input-bordered w-full"
                            name='price'
                            required />
                    </div>
                    {/* Supplier */}
                    <div>
                        <label className="block font-semibold mb-2">Supplier</label>
                        <input
                            defaultValue={supplier}
                            type="text"
                            placeholder="Enter coffee supplier"
                            className="input input-bordered w-full"
                            name='supplier'
                            required />
                    </div>
                    {/* Taste */}
                    <div>
                        <label className="block font-semibold mb-2">Taste</label>
                        <input
                            defaultValue={taste}
                            type="text"
                            placeholder="Enter coffee taste"
                            className="input input-bordered w-full"
                            name='taste'
                            required />
                    </div>
                    {/* Category */}
                    <div>
                        <label className="block font-semibold mb-2">Category</label>
                        <input
                            defaultValue={category}
                            type="text"
                            placeholder="Enter coffee category"
                            className="input input-bordered w-full"
                            name='category'
                            required />
                    </div>
                    {/* Details */}
                    <div>
                        <label className="block font-semibold mb-2">Details</label>
                        <input
                            defaultValue={details}
                            type="text"
                            placeholder="Enter coffee details"
                            className="input input-bordered w-full"
                            name='details'
                        />
                    </div>
                    {/* Photo */}
                    <div className="col-span-2">
                        <label className="block font-semibold mb-2">Photo</label>
                        <input
                            defaultValue={photo}
                            type="text"
                            placeholder="Enter photo URL"
                            className="input input-bordered w-full"
                            name='photo'
                            required />
                    </div>
                    <button type='submit' className="btn btn-primary mt-6 w-10/12 mx-auto bg-[#D2B48C] text-black hover:bg-[#b59672] col-span-2">
                        Update Coffee
                    </button>
                </form>

            </div>
        </div>
    );
};

export default UpdateCoffee;