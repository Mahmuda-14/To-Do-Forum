/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import bn from '../assets/bn.png'

const Banner = () => {
    return (
        <div>
            <div className="hero w-[94rem] h-[39rem] mx-auto" style={{ backgroundImage: `url(${bn})` }}>
               
               
                <div className="text-left text-black mr-[800px] ml-[73px] -mt-[180px]">
               
                    
                        <h1 className="mb-5 text-4xl font-serif font-extrabold">Streamline your work and conquer your tasks with seamless organization in both professional and personal spheres.</h1>
                       
                        <Link to='/login'><button className="btn bg-red-950 text-white">Let's Explore</button></Link>
                   
                </div>
            </div>
        </div>
    );
};

export default Banner;