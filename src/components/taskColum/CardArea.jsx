import { useState } from "react";


const CardArea = ({ onDrop }) => {
    const [showDrop, setShowDrop] = useState(false)
    return (
        <section
            onDragEnter={() => setShowDrop(true)}
            onDragLeave={() => setShowDrop(false)}
            onDrop={() => {
                onDrop();
                setShowDrop(false);
            }}
            onDragOver={e => e.preventDefault()}
            className={showDrop ? "bg-white p-4 rounded-lg shadow-md mb-4 cursor-grab opacity-1 transition duration-300 ease-in-out" : "opacity-0"}>Drop Here</section>
    );
};

export default CardArea;