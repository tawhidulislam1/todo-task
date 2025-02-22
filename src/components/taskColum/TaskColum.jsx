import { useQuery } from "@tanstack/react-query";
import TaskCard from "./TaskCard";
import axios from "axios";
import CardArea from "./CardArea";

const TaskColumn = ({ status, tasks, setActiveCard, onDrop,deleteTask }) => {


    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-center mb-4">{status}</h2>
            <CardArea onDrop={() => onDrop(status, 0)}></CardArea>

            {tasks
                .filter((task) => task?.category?.toLowerCase() === status?.toLowerCase())
                .length === 0 ? (
                <p className="text-center text-gray-500">No tasks in this category</p>
            ) : (
                tasks
                    .filter((task) => task?.category?.toLowerCase() === status?.toLowerCase())
                    .map((task, index) => (
                        <div key={index}>
                            <TaskCard task={task} index={index} setActiveCard={setActiveCard} deleteTask={deleteTask}/>
                            <CardArea onDrop={() => onDrop(task.category, index + 1)}></CardArea>
                        </div>
                    ))
            )}
        </div>
    );
};

export default TaskColumn;
