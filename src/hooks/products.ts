import { Products } from "../data/products";
import { IProduct } from "../models";
import { AxiosError } from "axios";
import axios from "axios";
import { randomInt } from "crypto";
import React, { createElement as e, useEffect, useState } from "react";

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function fetchProducts() {
        try {
            setError("");
            setLoading(true);
            const response = await axios.get<IProduct[]>(
                "https://fakestoreapi.com/products  "
            );
            setProducts(response.data);
            setLoading(false);
        } catch (e: unknown) {
            const error = e as AxiosError;
            setLoading(false);
            setError(error.message);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return { error, loading, products };
}
