// import Nav from "./Components/Nav";

import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
           
            <Nav></Nav>
            <hr className=" bg-red-950 pb-[2px]"/>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;