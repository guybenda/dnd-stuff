/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { getFirestore } from "firebase-admin/firestore";
import * as logger from "firebase-functions/logger";
import { HttpsOptions, onRequest } from "firebase-functions/v2/https";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

const OPTIONS: HttpsOptions = { region: "europe-west3" };

export const helloWorld = onRequest(OPTIONS, (request, response) => {
	logger.info("Hello logs!", { structuredData: true });
	response.send("Hello from Firebase!");
});

export const getSessions = onRequest(OPTIONS, async (request, response) => {
	getFirestore();
});
