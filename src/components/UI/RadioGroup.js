import React from "react";
import styles from "./RadioGroup.module.css";

const RadioGroup = ({ values, handleChange, price }) => {
    return (
        <>
            <div className={styles.radio}>
                <p className="block text-sm font-medium text-gray-700 mb-1 col-span-2">
                    How would you like to purchase this product?
                </p>
                <label htmlFor="onetime">
                    <input
                        type="radio"
                        id="onetime"
                        name="purchace"
                        value={values.purchace}
                        className="mr-1"
                        onChange={handleChange}
                        checked={Number(values.purchace) === price}
                    />
                    One-Time
                </label>

                <label htmlFor="subscribe">
                    <input
                        type="radio"
                        id="subscribe"
                        name="purchace"
                        value={values.purchace}
                        onChange={handleChange}
                        className="mr-1"
                        checked={Number(values.purchace) !== price}
                    />
                    Subscribe every 3 months and save 10%
                </label>
            </div>
        </>
    );
};

export default RadioGroup;
