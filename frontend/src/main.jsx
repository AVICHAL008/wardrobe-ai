import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import App from "./App";
import "./index.css";

import { AuthProvider } from "./contexts/AuthContext";
import { WardrobeProvider } from "./contexts/WardrobeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <WardrobeProvider>

          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              duration: 2500,
              style: {
                background: "#18181b",
                color: "#fff",
                border: "1px solid #3f3f46",
                borderRadius: "16px",
              },
            }}
          />

          <App />

        </WardrobeProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);