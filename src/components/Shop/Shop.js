import Product from "./Product";

import styles from "./Shop.module.css";

const Shop = ({ products }) => {

    return (
        <section>
            <div className={styles.items}>
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default Shop;
