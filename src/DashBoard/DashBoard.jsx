
import { FaList} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { MdAddBox } from "react-icons/md";
import { IoArrowBackCircle } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { RxActivityLog } from "react-icons/rx";

const DashBoard = () => {
    const { user } = useContext(AuthContext);


    return (

        <div className="lg:flex m-11">

            {/* dashboard side bar */}
            <div className="w-64 h-[30rem] mt-[67px] bg-red-100 border-y-4 border-y-red-900">

                <div className="flex flex-row">
                    <label tabIndex={0} className="avatar w-11 h-11 left-[25px] top-[26px]  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"> {user?.photoURL && <img className=' w-14 h-14 rounded-full' src={user.photoURL} alt="User Photo" />}</label>


                    <h2 className=" text-center ml-9 mb-11 mt-8 font-bold text-2xl">DashBoard</h2>
                </div>
                <hr />

                <ul className="menu p-4">

                    <>


                        <li>
                            <NavLink to="/dashboard/add">
                                <MdAddBox></MdAddBox>
                                Create Task</NavLink>
                        </li>

                        <li>
                            <NavLink to="/dashboard/my">
                                <FaList></FaList>
                                To-Do List</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/all">
                                <RxActivityLog></RxActivityLog>
                                Activity</NavLink>
                        </li>
                    </>
                    



                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <IoArrowBackCircle></IoArrowBackCircle>
                            Go Back</NavLink>
                    </li>

                </ul>

            </div>
            {/* dashboard content */}
            <div className="flex-1 px-8">

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;

