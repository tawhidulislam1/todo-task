import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const TaskCard = ({ task, setActiveCard, index, updateTask, deleteTask }) => {

    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-4 active:border active:border-black active:opacity-70 cursor-grab"
            draggable
            onDragStart={() => { setActiveCard(task._id) }}
            onDragEnd={() => setActiveCard(null)}
        >
            <h3 className="font-semibold text-gray-800">{task.name}</h3>
            <p className="text-gray-600 text-sm">{task.description}</p>
            <p className="text-xs text-blue-600 font-semibold mt-1">{task.category}</p>
            <div className="flex justify-end gap-2 mt-3">
                <Link to={`/updateTask/${task._id}`}>

                    <button
                        className="px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600"
                    >
                        Update
                    </button>
                </Link>
                <button
                    onClick={() => deleteTask(task._id)}
                    className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TaskCard;
