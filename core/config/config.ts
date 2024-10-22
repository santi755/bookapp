import Constants from "expo-constants";

export const API_URL: string | undefined = Constants.expoConfig?.extra?.apiUrl;
export const LOGIN_EMAIL: string | undefined =
  Constants.expoConfig?.extra?.loginEmail;
export const LOGIN_PASSWORD: string | undefined =
  Constants.expoConfig?.extra?.loginPassword;
