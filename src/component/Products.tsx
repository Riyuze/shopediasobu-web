import { getProducts } from "../services/product";
import { ProductModel } from "../model/product";

const Products = ({ id }: { id: string }) => {
    const { data } = getProducts(id || "");
    return (
        <>
            {data &&
                data.map((product: ProductModel) => {
                    return (
                        <div
                            className="rounded-2xl border my-4 cursor-pointer"
                            onClick={() => window.open(product.url)}
                        >
                            <p className="text-lg font-semibold my-2">
                                {product.title}
                            </p>
                            <img src={product.image} />
                            <p className="text-base my-2">${product.price}</p>
                        </div>
                    );
                })}
        </>
    );
};

export default Products;
