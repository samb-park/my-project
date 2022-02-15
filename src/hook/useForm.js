import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../module/addCart";
import { useNavigate } from "react-router-dom";

const useForm = (validate, product) => {
    const [values, setValues] = useState({
        customername: "",
        allergies: "",
        purchace: product.price,
    });
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (event) => {
        let { name, value, id } = event.target;

        if (id === "subscribe") {
            value = product.price - product.price * 0.1;
        } else if (id === "onetime") {
            value = product.price;
        }

        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const result = validate(values);

        if (Object.keys(result).length === 0 && result.constructor === Object) {
            dispatch(
                add({
                    id: product.id,
                    name: product.name,
                    price: values.purchace,
                    url: product.primary_image.url_standard,
                    customername: values.customername,
                    allergies: values.allergies,
                })
            );
            navigate("/Cart");
        } else {
            console.log(111);
        }
        setErrors(result);
    };

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
    };
};

export default useForm;
