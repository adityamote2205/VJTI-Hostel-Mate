import React from "react";
import { createRoot } from "react-dom/client"; // Importing createRoot from react-dom/client
import App from "./App";

// Create a root for your React application
const root = createRoot(document.getElementById('root'));

// Render your application component inside the root
root.render(<App/>);

