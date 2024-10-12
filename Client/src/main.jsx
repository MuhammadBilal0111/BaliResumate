import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ThemeProvider from "./components/ThemeProvider.jsx";
import { Bounce, ToastContainer } from "react-toastify";
import { persistor } from "../src/store/store.js";
import { PersistGate } from "redux-persist/integration/react";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PersistGate persistor={persistor}>
      {/* PersistGate delay the rendering until the data stored in local storage and return  */}
      <Provider store={store}>
        <ThemeProvider>
          <App />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition:Bounce
            bodyClassName="toastBody"
          />
        </ThemeProvider>
      </Provider>
    </PersistGate>
  </StrictMode>
);
