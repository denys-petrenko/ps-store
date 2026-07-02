import { db } from "./firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const productsCol = collection(db, "products");

export const getProduct = async (slug) => {
    const q = query(
        productsCol,
        where("slug", "==", slug)
    )

    const snapshot = await getDocs(q);

    const doc = snapshot.docs[0];


    return {
        id: doc.id,
        ...doc.data()
    }
}