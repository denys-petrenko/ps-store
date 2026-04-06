import { collection, addDoc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

const productsCol = collection(db, "products");
console.log(productsCol);

