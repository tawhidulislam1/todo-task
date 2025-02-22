import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTask = () => {
    const { name, category, description, _id } = useLoaderData()
    const navigate = useNavigate();
    console.log(name);
    const handleUpdate = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const description = form.description.value;
        const category = form.category.value;
        console.log({ name, description, category });
        const updateInfo = {
            name, description, category
        }

        axios.patch(`http://localhost:5000/task/update/${_id}`, updateInfo)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Your Task Updated ",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                navigate('/task');
            });
    }
    return (
        <div className="my-7">
            <div className="p-8 bg-white rounded-lg shadow-xl border border-gray-200 max-w-xl mx-auto">
                <h3 className="font-bold text-2xl text-blue-600 mb-4">Update Task</h3>
                <form onSubmit={handleUpdate} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Task Name</label>
                        <input
                            type="text"
                            placeholder="Enter task name"
                            name="name"
                            defaultValue={name}
                            required
                            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Task Description</label>
                        <textarea
                            placeholder="Enter task description"
                            name="description"
                            defaultValue={description}
                            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                        <select
                            name="category"
                            defaultValue={category}
                            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                            <option value="ToDo">To-Do</option>
                            <option value="InProgress">In Progress</option>
                            <option value="Done">Done</option>
                        </select>
                    </div>
                    <div className="flex justify-end gap-4 mt-6">

                        <button
                            type="submit"
                            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 transition duration-200 ease-in-out"
                        >
                            Update Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateTask;