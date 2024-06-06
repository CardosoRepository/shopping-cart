import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { products } from "../../data/products";

const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {products.map(({id, title, price, description}) => {
                    return (
                        <ProductItem
                            key={id}
                            id={id}
                            title={title}
                            price={price}
                            description={description}
                        />
                    );
                })}
            </ul>
        </section>
    );
};

export default Products;
