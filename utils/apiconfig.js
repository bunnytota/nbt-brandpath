
import base64 from 'react-native-base64';
import {
BASE_URL,
AUTH_USERNAME,
AUTH_PASSWORD,
AZURE_USERNAME
} from '@env';

export const Baseurl = () => (
     
BASE_URL
    
);


export const Header = () => {
  
  const authUsername = AUTH_USERNAME;
  
  const authPassword = AUTH_PASSWORD;
  const base64Auth = base64.encode(`${authUsername}:${authPassword}`);
  return `Basic ${base64Auth}`;
};



export const AzureName = AZURE_USERNAME