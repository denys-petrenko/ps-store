import { useEffect, useState } from "react";
import { getCategories } from "../api/categoriesApi";
import { createCategoriesTree } from "../utils/categories/createCategoriesTree";

export const useCategories = () => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadCategories = async () => {
            try {
                const data = await getCategories();
                setCategories(createCategoriesTree(data));
            } catch (err) {
                console.error(err);
                setError(err)
            }
            finally {
                setIsLoading(false);
            }
        }

        loadCategories();
    }, [])

    return { categories, isLoading, error };
}