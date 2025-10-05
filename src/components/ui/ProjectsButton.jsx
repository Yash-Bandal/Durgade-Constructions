import React from "react";

const ProjectsButton = ({ children, onClick }) => {
    return (
        <button
        // <div
            onClick={onClick}
            className="
        relative inline-block
        px-4 py-3  
        text-orange-600
        font- uppercase tracking-wider
        transition-all duration-300 hover:text-orange-700
        before:content-[''] before:absolute before:top-0 before:left-0 
        before:w-full before:h-full before:border-t before:border-l before:border-orange-500
        after:content-[''] after:absolute after:bottom-0 after:right-0 
        after:w-full after:h-full after:border-b after:border-r after:border-orange-500
      "
        >
            {children}
            {/* </div> */}
         </button>
    );
};

export default ProjectsButton;
