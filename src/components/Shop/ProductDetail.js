import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { display } from "../../module/updateHeader";

import parse from "html-react-parser";
import styles from "./ProductDetail.module.css";
import useForm from "../../hook/useForm";
import validate from "../../validation/Validation";
import Button from "../UI/Button";
import InputText from "../UI/InputText";
import RadioGroup from "../UI/RadioGroup";

const ProductDetail = ({ products }) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const index = products.findIndex((x) => x.id === Number(id));
    const product = products[index];
    const { handleChange, handleSubmit, values, errors } = useForm(
        validate,
        product
    );

    useEffect(() => {
        dispatch(
            display({
                menu: "Shop",
                name: "Vitamins & Supplements",
                title: product.name,
                description: product.meta_description,
            })
        );
    }, []);

    return (
        <section>
            <div className={styles.productDetail}>
                <div className="image pt-5">
                    <img
                        src={product.primary_image.url_standard}
                        alt={product.primary_image.url_standard}
                    />
                </div>
                <div className="description pt-5">
                    {parse(product.description)}
                    <p className="text-base lg:text-2xl text-right mb-3">
                        USD ${values.purchace}
                    </p>
                </div>
                <div className="form pt-5 w-full col-span-2">
                    <form onSubmit={handleSubmit}>
                        <RadioGroup
                            values={values}
                            price={product.price}
                            handleChange={handleChange}
                        />
                        <div className="my-5">
                            <InputText
                                text="Who it's for:"
                                name="customername"
                                value={values.customername}
                                onChange={handleChange}
                            />
                            {errors && (
                                <p className=" text-red-600">
                                    {errors.customername}
                                </p>
                            )}
                            <InputText
                                text="List any allergies :"
                                name="allergies"
                                value={values.allergies}
                                onChange={handleChange}
                            />
                        </div>
                        <Button type="submit" name="Add to Cart" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;
