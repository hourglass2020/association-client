import { ThemeProvider } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import AuthProvider from "./context/Auth/AuthProvider";

function App() {
    return (
        <div dir={"rtl"}>
            <AuthProvider>
                <ThemeProvider>
                    <Toaster position={"bottom-left"} />
                    <HelmetProvider>
                        <RouterProvider router={router} />
                    </HelmetProvider>
                </ThemeProvider>
            </AuthProvider>
        </div>
    );
}

export default App;
