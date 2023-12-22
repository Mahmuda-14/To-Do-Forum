import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const GoogleLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            navigate('/');
            console.log(result.user);
            const userInfo = {
                name: result.user?.displayName,
                email: result.user?.email,
                
            }
            fetch('https://jt-server.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(userInfo),
            })
            .then((res) => res.json())
            .then((data) => {
                    if (data.insertedId) {
                        console.log('user added to the database')
                        
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User created successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/');
                    }
                })
        })
    }

    return (
        <div className=" pl-[6rem] pr-8 pb-2">
           
            <div>
                <button onClick={handleGoogleSignIn} className="btn btn-outline border-2 border-red-900">
                   Join Us with <FaGoogle className="mr-2 text-xl text-red-900 "></FaGoogle>
                   
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;

