import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomCloseButton = ({ closeToast }) => (
  <button
    onClick={closeToast}
    className="text-gray-200  cursor-pointer absolute top-0 right-2"
  >
    ✖
  </button>
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer
      closeButton={<CustomCloseButton />}
      toastClassName="!bg-transparent  !backdrop-blur-md !text-white !border !border-white/20 !shadow-lg"
      position="top-right"
      autoClose={3000}
    />
    <App />
  </StrictMode>
);
