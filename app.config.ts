import "dotenv/config";
import { ExpoConfig, ConfigContext } from "@expo/config";

// La función recibe el contexto de configuración
export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config, // Mantiene la configuración base que ya tienes
  name: "lecturapp",
  slug: "lecturapp",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "myapp",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/images/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  plugins: ["expo-router", "expo-localization", "expo-secure-store"],
  experiments: {
    typedRoutes: true,
  },
  // Agregamos un campo "extra" para las variables de entorno
  extra: {
    apiUrl:
      process.env.EXPO_PUBLIC_API_URL || "https://default-api.example.com",
  },
});
