import { ThemeProvider } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
    return (
        <div dir={"rtl"}>
            <ThemeProvider>
                <Toaster position={"bottom-left"} />
                <HelmetProvider>
                    <RouterProvider router={router} />
                </HelmetProvider>
            </ThemeProvider>
        </div>
    );
}

export default App;
