import { useState, useMemo } from "react";

export const useCategoriesMenu = (categories) => {
    const [showCategories, setShowCategories] = useState(false);
    const [activeCategoryId, setActiveCategoryId] = useState(null);

    const activeCategory = useMemo(() =>
        categories.find(cat => cat.id === activeCategoryId),
        [categories, activeCategoryId]
    );

    const showMenu = () => setShowCategories(true);
    const closeMenu = () => setShowCategories(false);
    const toggleMenu = () => setShowCategories(prev => !prev);
    const selectCategory = (id) => setActiveCategoryId(id);
    const resetCategory = () => setActiveCategoryId(null);

    return {
        state: {
            showCategories,
            activeCategory,
            activeCategoryId
        },
        actions: {
            showMenu,
            closeMenu,
            toggleMenu,
            selectCategory,
            resetCategory
        },
        data: {
            categories
        }
    }
}