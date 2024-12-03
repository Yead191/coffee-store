import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import Swal from 'sweetalert2';


const Users = () => {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {

            confirmButton: "btn btn-error text-white ",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });
    const handleDeleteUser = (_id) => {
        // console.log('delete hit' , _id);
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {



                // delete from db

                fetch(`http://localhost:5000/users/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            swalWithBootstrapButtons.fire({
                                title: "Deleted!",
                                text: "Your user has been deleted.",
                                icon: "success"
                            });

                        }
                        const remaining = users.filter(user=> user._id !== _id)
                        setUsers(remaining)
                    })



            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary user is safe :)",
                    icon: "error"
                });
            }
        });


    }



    return (
        <div className='my-16'>
            <h1 className='text-center font-semibold text-3xl font-rancho' >Total Users: {users.length}</h1>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last Login At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user => (
                                <tr key={user._id} className="hover">
                                    <th>1</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>{user?.createdAt}</td>
                                    <td>{user?.loggedAt}</td>
                                    <td className='flex gap-3'>
                                        <button className='btn btn-xs'><FaEdit />
                                        </button>
                                        <button onClick={() => handleDeleteUser(user?._id)} className='btn btn-xs btn-error text-white'>X</button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;