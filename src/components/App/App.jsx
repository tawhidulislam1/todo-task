import { useState } from "react";
import TaskColumn from "../taskColum/TaskColum";

const App = ({ tasks, onDrop, setActiveCard,deleteTask }) => {

    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <TaskColumn status="ToDo" tasks={tasks} setActiveCard={setActiveCard} onDrop={onDrop} deleteTask={deleteTask}/>
                <TaskColumn status="InProgress" tasks={tasks} setActiveCard={setActiveCard} onDrop={onDrop} deleteTask={deleteTask}/>
                <TaskColumn status="Done" tasks={tasks} setActiveCard={setActiveCard} onDrop={onDrop} deleteTask={deleteTask}/>
            </div>
        </div>
    );
};

export default App;
