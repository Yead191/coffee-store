import React from 'react';
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, supplier, taste, category, details, photo, price } = coffee
    // const navigate = useNavigate() //[short-way]

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                        }
                        const remaining = coffees.filter(cof => cof._id !== _id)
                        setCoffees(remaining)
                        // navigate('/')
                    })

            }
        });

    }



    return (
        <div

            className="card bg-[#F5F4F1] shadow-xl rounded-lg flex flex-row items-center p-4 h-[200px] "
        >
            <img
                src={photo}
                alt={name}
                className="w-20 md:w-32 h-full object-cover rounded-lg mr-4"
            />
            <div className="flex-grow">
                <h4 className="font-bold text-lg md:text-xl">{name}</h4>
                <p>Supplier: <span className='text-gray-500 font-light'>{supplier}</span> </p>
                <p>Price: ৳<span> {price}  </span> </p>
            </div>
            <div className="flex flex-col gap-2">
                <button className="btn btn-sm btn-ghost text-white bg-[#D2B48C]">
                    <AiOutlineEye size={20} />
                </button>
                <Link to={`/updateCoffee/${_id}`} className="btn btn-sm btn-ghost bg-black text-white">
                    <AiOutlineEdit size={20} />
                </Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-xs btn-ghost text-white bg-red-500 pb-">
                    <AiOutlineDelete className='text-lg' size={20} />
                </button>
            </div>
        </div>
    );
};

export default CoffeeCard;