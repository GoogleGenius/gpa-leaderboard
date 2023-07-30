import { FirebaseApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { validateId } from "./validateId";

export const setGPAEntry = (
    app: FirebaseApp,
    userId: number,
    name: string,
    cumulativeGPA: number | null,
    freshmanGPA: number | null,
    sophomoreGPA: number | null,
    juniorGPA: number | null,
    seniorGPA: number | null,
) => {
    if (!validateId(userId)) throw new Error("Invalid school ID");

    const database = getDatabase(app);
    const reference = ref(database, `gpaData/${userId}`);

    set(reference, {
        name: name,
        email: `${userId}@student.linnmar.org`,
        cumulativeGPA: cumulativeGPA,
        freshmanGPA: freshmanGPA,
        sophomoreGPA: sophomoreGPA,
        juniorGPA: juniorGPA,
        seniorGPA: seniorGPA,
    });
};
