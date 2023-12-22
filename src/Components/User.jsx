
// import {  FaUsers } from "react-icons/fa";
// import { BiSolidBadgeCheck } from "react-icons/bi"
// import Swal from "sweetalert2";

import { useEffect, useState } from "react";
import Nav from "./Nav";



const User = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
          .then((res) => res.json())
          .then((data) => {
            setUsers(data);
            
          });
      }, []);
  

    return (
        <div>
            <Nav></Nav>
            <div className="overflow-x-auto p-10 border-4 border-y-red-900">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr className=" text-xl">
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.roles}</td>
                             
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;

