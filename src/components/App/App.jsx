import { useState } from "react";
import TaskColumn from "../taskColum/TaskColum";

const App = ({ tasks }) => {
    const [activeCard, setActiveCard] = useState(null)
    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <TaskColumn status="ToDo" tasks={tasks} setActiveCard={setActiveCard} />
                <TaskColumn status="InProgress" tasks={tasks} setActiveCard={setActiveCard} />
                <TaskColumn status="Done" tasks={tasks} setActiveCard={setActiveCard} />
            </div>
            <h2>active drag - {activeCard}</h2>
        </div>
    );
};

export default App;
