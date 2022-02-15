import React from "react";

const Button = ({ type, name, handleClick }) => {
    return (
        <button
            className="items-center px-3 py-2 border  text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600  hover:bg-indigo-700"
            type={type}
            onClick={handleClick}
        >
            {name}
        </button>
    );
};

export default Button;
