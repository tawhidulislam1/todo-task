import axios from "axios";
import App from "../components/App/App";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";  // optional, for notifications

const Task = () => {
    // Fetch tasks from the server
    const { data: tasks = [], refetch } = useQuery({
        queryKey: ["task"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:5000/task");
            return res.data;
        }
    });

    // Handle task submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.taskName.value;
        const description = form.description.value;
        const category = form.category.value;
        console.log({ name, description, category });

        const newTask = { name, description, category };

        // Make the POST request to add a task
        axios
            .post("http://localhost:5000/task", newTask)
            .then((res) => {
                console.log("Task added:", res.data);
                // Reset form and close modal
                form.reset();
                document.getElementById("my_modal_5").close();

                // Refetch the tasks after adding a new one
                refetch();
                toast.success("Task added successfully!");  // Optional: add a success toast
            })
            .catch((err) => {
                console.error("Error adding task:", err);
                alert("Failed to add task. Please try again!");
            });
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Task Management</h2>
            <div className="flex justify-end">
                <button
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
                    onClick={() => document.getElementById("my_modal_5").showModal()}
                >
                    Add Task
                </button>
            </div>

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle transition-opacity duration-500">
                <div className="modal-box p-8 bg-white rounded-lg shadow-xl border border-gray-200">
                    <h3 className="font-bold text-2xl text-blue-600 mb-4">Add New Task</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Task Name</label>
                            <input
                                type="text"
                                placeholder="Enter task name"
                                name="taskName"
                                required
                                className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Task Description</label>
                            <textarea
                                placeholder="Enter task description"
                                name="description"
                                className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                            <select
                                name="category"
                                className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                            >
                                <option value="ToDo">To-Do</option>
                                <option value="InProgress">In Progress</option>
                                <option value="Done">Done</option>
                            </select>
                        </div>
                        <div className="flex justify-end gap-4 mt-6">
                            <div className="modal-action mt-6">
                                <form method="dialog">
                                    <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 transition duration-200 ease-in-out">Close</button>
                                </form>
                            </div>
                            <button
                                type="submit"
                                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 transition duration-200 ease-in-out"
                            >
                                Save Task
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>

            {/* Render Task List */}
            <App tasks={tasks} />
        </div>
    );
};

export default Task;
