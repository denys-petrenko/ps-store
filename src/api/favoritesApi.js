import { db } from "./firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const productsCol = collection(db, "products");

export const getFavoritesProducts = async () => {
    const q = query(
        productsCol,
        where("favorite", "==", true)
    )

    const favoriteCol = await getDocs(q);

    return favoriteCol.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
}