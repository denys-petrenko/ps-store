import { getProduct } from "../../api/productApi";
import { getProductTemplate } from "../../api/productTemplateApi";
import { mergeProductWithTemplate } from "./mergeProductWithTemplate";

export const getMergedProduct = async (slug) => {
    const product = await getProduct(slug);
    const template = await getProductTemplate();

    return mergeProductWithTemplate(product, template);
}