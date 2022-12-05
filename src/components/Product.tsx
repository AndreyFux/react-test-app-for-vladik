import { IProduct } from "../models";
import { useState } from "react";

interface ProductProps {
    product: IProduct;
}

export function Product({ product }: ProductProps) {
    const [details, setDetails] = useState(false);
    const btnBgClassName = details ? "bg-blue-400" : "bg-yellow-400";
    const btnClasses = ["py-2 px-4 border", btnBgClassName];
    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={product.image} alt={product.title} className="w-1/6" />
            <p>{product.title}</p>
            <p className="font-bold">{product.price}</p>
            <button
                className={btnClasses.join(" ")}
                onClick={() => setDetails((prev) => !prev)}
            >
                {details ? "Hide details" : "Show Details"}
            </button>
            {details && (
                <div className=" py-2 px-4 rounded flex flex-col items-center mb-2">
                    <div>{product.description}</div>
                    <div style={{ fontWeight: "bold" }}>
                        Rate:
                        {product.rating.rate}
                    </div>
                </div>
            )}
        </div>
    );
}
