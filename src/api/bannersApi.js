import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const bannersCol = collection(db, "banners");

export const getBanners = async () => {
    const snapshot = await getDocs(bannersCol);
    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
}