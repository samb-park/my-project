import React from "react";

const Badge = (props) => {
    return (
        <span className="ml-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
            {props.children}
        </span>
    );
};

export default Badge;
