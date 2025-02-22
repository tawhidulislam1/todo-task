import React from 'react';

const TaskCard = ({ task, index, setActiveCard }) => {
    return (
        <div>
            <div key={task.id} className="bg-white p-4 rounded-lg shadow-md mb-4 active:border active:border-black active:opacity-70 cursor-grab " draggable onDragStart={() => { setActiveCard(index + 1) }} onDragEnd={() => setActiveCard(null)}>
                <h3 className="font-semibold text-gray-800">{task.name}</h3>
                <p className="text-gray-600 text-sm">{task.description}</p>
                <p className="text-xs text-blue-600 font-semibold mt-1">{task.category}</p>
                <div className="flex justify-end gap-2 mt-3">
                    <button
                        onClick={() => updateTask(task.id)}
                        className="px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600"
                    >
                        Update
                    </button>
                    <button
                        onClick={() => deleteTask(task.id)}
                        className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;