import Grid from "@mui/material/Grid";
import { PageLayout } from "./components/PageLayout";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { MsalProvider} from '@azure/msal-react';
//import { useMsal, useIsAuthenticated } from '@azure/msal-react';
//import { InteractionRequiredAuthError } from "@azure/msal-browser";
//import { useEffect } from "react";

function App( {msalInstance}) {
    return (
        <MsalProvider instance={msalInstance}>
            <PageLayout>
                <Grid container justifyContent="center">
                    <Pages />
                </Grid>
            </PageLayout>
        </MsalProvider>
    );
}

const Pages = () => {

    /********************************************
    Use the following for non interactive sign in
     */
    // const  {instance} = useMsal();
    // const isAuthenticated = useIsAuthenticated();

    // useEffect( () => {
    //     if (!isAuthenticated) {
    //         instance.ssoSilent({
    //             scopes: ["user.read"],
    //             loginHint: "jbarnes@selvaris.com", // username or session id or msal account object
    //         }).then( (response) => {
    //             console.log('Login success!!!');
    //             instance.setActiveAccount(response.account);
    //         }).catch((error) => {
    //             console.log(error);
    //             if (error instanceof InteractionRequiredAuthError) {
    //                 instance.loginRedirect({
    //                     scopes: ["user.read"]
    //                 });
    //             }
    //         });
    //     }
    // }, [])
    
    /*
     END......Use the following for non interactive sign in
     ******************************************************/
    
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
}

export default App;
