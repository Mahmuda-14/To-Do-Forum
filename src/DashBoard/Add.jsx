
import { useForm } from "react-hook-form";
import { MdDownloadDone } from "react-icons/md";
import Swal from "sweetalert2";

const Add = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const tskItem = {
        
            title: data.title,
            time: new Date().toISOString(),
            tags: data.tag,
            description: data.description,
            status:'todo'
           
        }

        console.log(tskItem)
        fetch('http://localhost:5000/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(tskItem),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${data.title} is added to the task.`,
                        showConfirmButton: false,
                        timer: 1500,
                    });

                }
            });
    };




    return (


        <div className=" mt-16">


            <div className="card w-full shadow-2xl bg-base-100 px-9">
                <form onSubmit={handleSubmit(onSubmit)}>
                   
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Title*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Post Title"
                            {...register('title', { required: true })}

                            required
                            className="input input-bordered w-full" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Post Description</span>
                        </label>
                        <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="Post Description"></textarea>
                    </div>


                    <div className="flex gap-6">
                        {/* tag */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Priority</span>
                            </label>
                            <select defaultValue="default" {...register('tag', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select Priority</option>
                                <option value="Low"> Low</option>
                                <option value="Moderate"> Moderate</option>
                                <option value="High"> High</option>

                            </select>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Due Date</span>
                            </label>
                            
                            <input
                                type="date"
                                {...register("test", { valueAsDate: true, })}
                                required
                            className="input input-bordered w-full"
                            />
                        </div>


                    </div>


                    <button className="btn bg-red-900 text-white my-11 ml-[23rem]">Add Post<MdDownloadDone className="ml-4 text-white text-3xl"></MdDownloadDone>
                    </button>

                </form>
            </div>

        </div >


    );
};

export default Add;