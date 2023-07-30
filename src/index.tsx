import { initializeApp } from "firebase/app";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { firebaseConfig } from "./config/firebase";
import "./index.css";
import { getGPAData } from "./utils";

const app = initializeApp(firebaseConfig);

getGPAData(app)
    .then((data) => {
        if (data) {
            // TODO: Do something with the data
            console.log(data);
        } else {
            // TODO: Handle the case when there is no data
            console.log("No data available");
        }
    })
    .catch((error) => {
        // TODO: Handle any errors that might occur
        console.error(error);
    });

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
