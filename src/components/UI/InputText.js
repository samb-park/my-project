import React from "react";

const InputText = ({name,text,values,onChange}) => {
    return (
        <div className="mt-5">
            <label
                htmlFor={name}
                className="block text-sm font-medium text-gray-700"
            >
                {text}
            </label>
            <div className="mt-1">
                <input
                    id={name}
                    name={name}
                    type="text"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={values}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

export default InputText;
