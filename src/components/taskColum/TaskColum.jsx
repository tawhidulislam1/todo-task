import { useQuery } from "@tanstack/react-query";
import TaskCard from "./TaskCard";
import axios from "axios";

const TaskColumn = ({ status, tasks, setActiveCard }) => {
    // const { data: tasks = [] } = useQuery({
    //     queryKey: ["task"],
    //     queryFn: async () => {
    //         const res = await axios.get("http://localhost:5000/task");
    //         return res.data;
    //     }
    // });

    console.log("Fetched tasks:", tasks);

    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-center mb-4">{status}</h2>
            {tasks
                .filter((task) => task?.category?.toLowerCase() === status?.toLowerCase())
                .length === 0 ? (
                <p className="text-center text-gray-500">No tasks in this category</p>
            ) : (
                tasks
                    .filter((task) => task?.category?.toLowerCase() === status?.toLowerCase())
                    .map((task, index) => (
                        <TaskCard key={task._id} task={task} index={index} setActiveCard={setActiveCard} />
                    ))
            )}
        </div>
    );
};

export default TaskColumn;
