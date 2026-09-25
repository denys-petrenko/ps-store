import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export const productsCol = collection(db, "products");
export const productTemplateCol = collection(db, "product_templates");

export const getAllProducts = async () => {
    const snapshot = await getDocs(productsCol);

    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
}



// export const duplicateTemplate = async () => {
//     const templateRef = doc(db, "product_templates", "ps5_slim_blu-ray_template");

//     const snapshot = await getDoc(templateRef);

//     if (!snapshot.exists()) return;

//     const templateData = snapshot.data();

//     await setDoc(
//         doc(db, "product_templates", "ps5_slim_template"),
//         {
//             ...templateData,
//             baseName: "Sony PlayStation 5 Slim Blu-ray"
//         }
//     )
// }
