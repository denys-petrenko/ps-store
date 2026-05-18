import {db} from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const categoriesCol = collection(db, "categories");

export const getCategories = async () => {
    const snapshot = await getDocs(categoriesCol);
    const categories = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))

    return categories;
}
