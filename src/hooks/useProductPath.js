import { useSelector } from "react-redux";
import { selectParentCategoryMap } from "../store/slices/categoriesSlice";

export const useProductPath = (item) => {
    const parentCategoryMap = useSelector(selectParentCategoryMap);
    const parentCategory = parentCategoryMap.get(item.category);

    return parentCategory ? `/ps-store/${parentCategory}/${item.category}/${item.slug}` : null;
}