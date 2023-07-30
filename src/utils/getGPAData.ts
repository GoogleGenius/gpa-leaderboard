import { FirebaseApp } from "firebase/app";
import { child, get, getDatabase, ref } from "firebase/database";

export const getGPAData = (app: FirebaseApp) => {
    const database = getDatabase(app);
    const reference = ref(database);
    return new Promise((resolve, reject) => {
        get(child(reference, "gpaData"))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    resolve(snapshot.val());
                } else {
                    console.log("No data available");
                    resolve(null);
                }
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
    });
};
