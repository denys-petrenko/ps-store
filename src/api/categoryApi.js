import { db } from "./firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const productsCol = collection(db, "products");

export const getCategory = async (category) => {
    const q = query(
        productsCol,
        where("category", "==", category)
    )

    const categoryCol = await getDocs(q);
    

    return categoryCol.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
}

// export const getCategory = async () => {
//     const snapshot = await getDocs(productsCol);
//     const products = snapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//     }))

//     return products;
// }






