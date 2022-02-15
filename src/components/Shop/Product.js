import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { display } from "../../module/updateHeader";
import { useEffect } from "react";

const Product = ({ product }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            display({
                menu: "Shop",
                name: "Shop",
                title: "Vitamins & Supplements",
            })
        );
    }, []);

    return (
        <div>
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <Link to={`/ProductDetail/${product.id}`}>
                    <img
                        src={product.primary_image.url_standard}
                        alt={product.primary_image.description}
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                </Link>
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                        {product.color}
                    </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                    ${product.price}
                </p>
            </div>
        </div>
    );
};

export default Product;
