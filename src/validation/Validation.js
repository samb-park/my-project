const Validation = (values) => {
    let errors = {};

    if (!values.customername.trim()) {
        errors.customername = "Name required";
    }

    return errors;
};

export default Validation;
