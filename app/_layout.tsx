import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import SimulatedSplashScreen from "@/components/splash-screen/SimulatedSplashScreen";

// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appReady, setAppReady] = useState(false);

  const [loaded] = Font.useFonts({
    PoppinsLight: require("@/assets/fonts/Poppins-Light.ttf"),
    PoppinsRegular: require("@/assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("@/assets/fonts/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("@/assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsBold: require("@/assets/fonts/Poppins-Bold.ttf"),
    PoppinsExtraBold: require("@/assets/fonts/Poppins-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (!loaded) return;
    // SplashScreen.hideAsync();
     setAppReady(true);
  }, [loaded]);

  if (!appReady) {
    return <SimulatedSplashScreen />;
  }

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={"dark-content"} />
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
  );
}
