import React from "react";
import { useState, useEffect } from "react";

const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(url);
                const responseData = await response.json();
                setData(responseData.products);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        getData();
    }, [url]);


    return { data, error, isLoading };
};

export default useFetchData;
