import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { SWRConfig } from "swr";
import { apiFetcher } from "./services/api";

import Routes from "./routes";
import "./index.css";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <SWRConfig
            value={{
                fetcher: apiFetcher,
                shouldRetryOnError: false,
            }}
        >
            <BrowserRouter>
                <ThemeProvider theme={darkTheme}>
                    <CssBaseline />
                    <Routes />
                </ThemeProvider>
            </BrowserRouter>
        </SWRConfig>
    </React.StrictMode>
);
