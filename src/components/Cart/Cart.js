import React from "react";
import { useDispatch } from "react-redux";
import { display } from "../../module/updateHeader";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { remove } from "../../module/addCart";
import Button from "../UI/Button";

const handleClick = (id, dispatch) => {
    dispatch(remove(id));
};

const Cart = () => {
    const dispatch = useDispatch();
    const CartList = useSelector((state) => state.addCart);

    useEffect(() => {
        dispatch(
            display({
                menu: "Cart",
                name: "Hooray! We Have your supplements ready",
                title: "Your Cart",
            })
        );
    }, []);

    return (
        <section>
            <ul className="bg-white shadow overflow-hidden sm:rounded-md divide-y divide-gray-200">
                {CartList.map((cart) => (
                    <li key={cart.id}>
                        <div className="flex flex-row p-5">
                            <div>
                                <img
                                    className="h-12 w-12"
                                    src={cart.url}
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col md:flex-row justify-between px-5 w-full md:items-center">
                                <div>
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                        {cart.name}
                                    </p>
                                    <p className="mt-2 flex items-center text-sm text-gray-500">
                                        USD ${cart.price}
                                    </p>
                                </div>
                                <div className="mt-2 md:mt-0">
                                    <div>
                                        <p className="text-sm text-gray-900">
                                            <span className="text-sm text-gray-900 font-bold">
                                                Name On Pouch:
                                            </span>{" "}
                                            {cart.customername}
                                        </p>
                                        <p className="mt-2 flex items-center text-sm text-gray-500">
                                            <span className="text-sm text-gray-900 font-bold">
                                                Allergies:
                                            </span>{" "}
                                            {cart.allergies
                                                ? cart.allergies
                                                : "None"}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-2 md:mt-0">
                                    <Button
                                        className="my-0"
                                        name="Remove"
                                        handleClick={() =>
                                            handleClick(cart.id, dispatch)
                                        }
                                    ></Button>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Cart;
