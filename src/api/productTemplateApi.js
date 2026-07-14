import { getDocs } from "firebase/firestore";
import { productTemplateCol } from "./productsApi";

let templatesCache = null;

export const getProductTemplate = async () => {
    if (templatesCache) return templatesCache;

    const snapshot = await getDocs(productTemplateCol);

    templatesCache = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))

    return templatesCache;
}