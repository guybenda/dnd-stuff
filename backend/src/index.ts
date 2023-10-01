import { cert, initializeApp } from "firebase-admin/app";

import { getFirestore } from "firebase-admin/firestore";
import key from "../key.json";

initializeApp({
	credential: cert(key),
});

const db = getFirestore();

const games = await db.collection("games").limit(10).get();

console.log(games);
