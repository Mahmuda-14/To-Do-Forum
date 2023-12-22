/* eslint-disable react/no-unescaped-entities */
import goggle from '../assets/gmail.png'
import ass from '../assets/ass.png'
import Nav from './Nav';
const New = () => {
    return (
        
       <>
       <Nav></Nav>
        <div className='flex flex-col p-5 mt-10 mx-8'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={goggle} className="max-w-sm rounded-lg" />
                    <div className=' bg-slate-200 p-4 rounded-lg'>
                        <h1 className="text-5xl font-bold">TO-DO with Gmail </h1>
                        <p className="py-6">You can quickly add tasks without leaving your inbox, thanks to our new Gmail add-on. Tasks added from Gmail can include the email content as a note, have handy fields (like due date, priority, list, and tags), and be given to your contacts if you need help.<span><a className=' underline text-blue-500' href='https://www.rememberthemilk.com/services/gmail/addon/'>Get to know more</a></span> </p>

                    </div>
                </div>
            </div>
            <br />

            <div className="hero">
                <div className="hero-content flex flex-row">
                    <img src={ass} className="max-w-sm rounded-lg " />
                    <div className=' bg-slate-200 p-4 rounded-lg'>
                        <h1 className="text-5xl font-bold"> Hey Google! </h1>
                        <p className="py-6">Remember TO-DO now works with your Google Assistant! Tell your Assistant to remind you, and the task will instantly be added to your list. Want to know what's coming up? Ask your Assistant what's due, and stay on top of your tasks. Need some help with all those tasks? Ask your Assistant to give a task to a helpful contact. <span><a className=' underline text-blue-500' href='https://www.rememberthemilk.com/services/googleassistant/'>Get to know more</a></span></p>


                    </div>
                </div>
            </div>
        </div>
       </>
    );
};

export default New;