import { InteractionType } from "@azure/msal-browser";
import { ProfileData } from "../components/ProfileData";
import { useMsalAuthentication} from "@azure/msal-react";
import { useEffect, useState } from "react";
import { fetchData } from "../fetch";

export const Profile = () => {
    const [graphData, setGraphData] = useState(null);
    const {result, error} = useMsalAuthentication(InteractionType.Popup, {
        scopes: ["user.read"]
    });

    useEffect( () => {
        if (!!graphData) {
            return;
        }

        if (!!error) {
            return;
        }

        if (result) {
            const {accessToken} = result;
            console.log(`token = ${accessToken}`);
            fetchData('https://graph.microsoft.com/v1.0/me', accessToken)
            .then(response =>  {
                console.log(`Reponse: ${JSON.stringify(response)}`);
                setGraphData(response);
            })
            .catch(error => console.log(`Error: ${error}`));
        }
    }, [graphData, error, result]);

    return (
        <>
          { graphData ? <ProfileData graphData={graphData} /> : null }
        </>
    )
}