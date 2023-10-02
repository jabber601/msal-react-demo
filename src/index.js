import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
import App from './App';
import {EventType, PublicClientApplication} from '@azure/msal-browser'


const pca = new PublicClientApplication ({
    auth: {
        clientId: '89a81d20-0c56-4c94-8f11-a6a98251fb6a',
        authority: 'https://login.microsoftonline.com/a76e1f14-4936-4f14-bcb9-4649b4cf1145',
        redirectUri: 'http://localhost:3000'
    }
})

pca.addEventCallback(event => {
    if (event.eventType === EventType.LOGIN_SUCCESS) {
        console.log(event);
        pca.setActiveAccount(event.payload.account);
    }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App msalInstance={pca}/>
            </ThemeProvider>
        </BrowserRouter>
    // </React.StrictMode>
);
